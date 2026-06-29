// Validates Framer attribute serialization for MCP link control values.
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { connect } from 'framer-api';
import { getComponentPropertyControls, serializeAttributesForXml, } from './framer.js';
const defaultServerApiProjectUrl = 'https://framer.com/projects/Framer-MCP-project-Designor-Framer-Template-copy--lfAw10qcrLpLLEznmZmo-irrP1?node=CpFAHygNJ';
describe('typedControls shape', () => {
    let framerClient;
    beforeAll(async () => {
        const projectUrl = process.env.FRAMER_PROJECT_URL || defaultServerApiProjectUrl;
        const apiKey = process.env.FRAMER_API_KEY;
        if (!apiKey) {
            throw new Error('FRAMER_API_KEY is required');
        }
        framerClient = await connect(projectUrl, apiKey);
    }, 30_000);
    afterAll(async () => {
        await framerClient?.disconnect();
    });
    it('inspects typedControls on a component instance', async () => {
        const componentInstances = await framerClient.getNodesWithType('ComponentInstanceNode');
        expect(componentInstances.length).toBeGreaterThan(0);
        // Find a component instance that has controls
        const instanceWithControls = componentInstances.find((node) => {
            return (node.controls &&
                Object.keys(node.controls).length > 0);
        });
        expect(instanceWithControls).toBeTruthy();
        const node = instanceWithControls;
        const typed = node.typedControls;
        // Snapshot the full shape: keys are hashed IDs, values have key/title/type/value
        const summary = Object.fromEntries(Object.entries(typed).map(([hashedId, control]) => {
            return [
                hashedId,
                {
                    key: control.key,
                    title: control.title,
                    type: control.type,
                    hasValue: control.value !== undefined,
                },
            ];
        }));
        expect({
            nodeName: node.name,
            componentName: node.componentName,
            controlsKeys: Object.keys(node.controls),
            typedControlsSummary: summary,
        }).toMatchInlineSnapshot(`
          {
            "componentName": "Elements/Social icon",
            "controlsKeys": [
              "zctLaVlb1",
              "hp3YaUkPc",
              "wjdsy_ef1",
              "jUToPhZBI",
            ],
            "nodeName": "Elements/Social icon",
            "typedControlsSummary": {
              "hp3YaUkPc": {
                "hasValue": true,
                "key": "hp3YaUkPc",
                "title": "Color",
                "type": "color",
              },
              "jUToPhZBI": {
                "hasValue": true,
                "key": "jUToPhZBI",
                "title": "Link",
                "type": "link",
              },
              "wjdsy_ef1": {
                "hasValue": true,
                "key": "wjdsy_ef1",
                "title": "Hover color",
                "type": "color",
              },
              "zctLaVlb1": {
                "hasValue": true,
                "key": "zctLaVlb1",
                "title": "Icon change",
                "type": "string",
              },
            },
          }
        `);
    }, 30_000);
    it('collects all unique control types across all components', async () => {
        const componentInstances = await framerClient.getNodesWithType('ComponentInstanceNode');
        // Collect all unique type values from typedControls across all instances
        const allTypes = new Set();
        for (const node of componentInstances) {
            const typed = node.typedControls;
            for (const control of Object.values(typed)) {
                allTypes.add(control.type);
            }
        }
        expect([...allTypes].sort()).toMatchInlineSnapshot(`
          [
            "boolean",
            "border",
            "borderRadius",
            "color",
            "enum",
            "eventHandler",
            "font",
            "fusedNumber",
            "image",
            "link",
            "number",
            "object",
            "scrollSection",
            "slot",
            "string",
            "transition",
          ]
        `);
    }, 30_000);
    it('inspects enum control with options', async () => {
        const componentInstances = await framerClient.getNodesWithType('ComponentInstanceNode');
        // Find an enum control to see how options look
        for (const node of componentInstances) {
            const typed = node.typedControls;
            for (const [key, control] of Object.entries(typed)) {
                if (control.type === 'enum') {
                    const enumControl = control;
                    expect({
                        nodeName: node.name,
                        controlKey: key,
                        controlTitle: enumControl.title,
                        controlType: enumControl.type,
                        controlValue: enumControl.value,
                        options: enumControl.options,
                    }).toMatchInlineSnapshot(`
                      {
                        "controlKey": "variant",
                        "controlTitle": "Variant",
                        "controlType": "enum",
                        "controlValue": "y3B4LMoQU",
                        "nodeName": "Navigation link (Base)",
                        "options": [
                          {
                            "id": "y3B4LMoQU",
                            "title": "Desktop",
                          },
                          {
                            "id": "vcCG4vFZi",
                            "title": "Tablet",
                          },
                          {
                            "id": "UODq7qN9k",
                            "title": "Phone",
                          },
                          {
                            "id": "urly6yVbp",
                            "title": "Desktop Active",
                          },
                          {
                            "id": "boF7SDawN",
                            "title": "Tablet Active",
                          },
                          {
                            "id": "gVNhRn9xy",
                            "title": "Phone Acitve",
                          },
                        ],
                      }
                    `);
                    return;
                }
            }
        }
    }, 30_000);
}, 60_000);
describe('serializeAttributesForXml', () => {
    it('serializes page+section link control objects', () => {
        const linkControlValue = {
            type: 'webPage',
            webPageId: 'page_123',
            scrollSection: {
                targetNodeId: 'section_456',
            },
        };
        const serializedAttributes = serializeAttributesForXml({
            ctaLink: linkControlValue,
        });
        expect(serializedAttributes.ctaLink).toBe(JSON.stringify(linkControlValue));
    });
    it('skips non-plain objects that cannot be safely serialized', () => {
        const serializedAttributes = serializeAttributesForXml({
            invalidValue: new Map([['a', 'b']]),
        });
        expect(serializedAttributes.invalidValue).toBeUndefined();
    });
    it('serializes image asset-like objects as URL strings', () => {
        class MockImageAsset {
            url;
            constructor(url) {
                this.url = url;
            }
        }
        const serializedAttributes = serializeAttributesForXml({
            heroImage: new MockImageAsset('https://framerusercontent.com/images/example.jpg'),
        });
        expect(serializedAttributes.heroImage).toBe('https://framerusercontent.com/images/example.jpg');
    });
    it('skips remote component schema imports in server runtime', async () => {
        const propertyControls = await getComponentPropertyControls('https://framer.com/m/component-example.js');
        expect(propertyControls).toEqual({
            comments: undefined,
            propertyControls: undefined,
        });
    });
});
//# sourceMappingURL=framer.test.js.map