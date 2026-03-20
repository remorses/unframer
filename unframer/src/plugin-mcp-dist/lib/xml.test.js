import { expect, test } from 'vitest';
import fs from 'fs';
import path from 'path';
import { bfsFramerLayersTree, extractObjectsFromXmlContent, framerLayersTreeToXml, rewriteXmlContentForTests, splitTreeInChunks, xmlToFramerLayersTree, } from 'plugin-mcp';
import dedent from 'string-dedent';
export const ITEMS_PER_ITERATION = 30;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
test('splitTreeInChunks long', () => {
    let folder = path.resolve(__dirname, 'evaluation/xml/');
    const xml = fs.readFileSync(path.resolve(folder, 'long.xml'), 'utf8');
    const max = ITEMS_PER_ITERATION;
    const tree = xmlToFramerLayersTree(xml);
    fs.writeFileSync(path.resolve(folder, './long-tree.json'), JSON.stringify(tree, null, 2));
    const chunks = splitTreeInChunks(tree, max);
    fs.writeFileSync(path.resolve(folder, './long-chunked.xml'), chunks
        .map((res) => `<-- ${res.reduce((acc, x) => acc + x.count, 0)} -->\n` +
        framerLayersTreeToXml(res))
        .join('\n\n---\n\n'));
    // Additional chunk size checks
    for (let chunk of chunks) {
        const nodes = bfsFramerLayersTree(chunk);
        expect(nodes.length).toBeLessThanOrEqual(max * 2);
        const withNodeId = nodes.filter((x) => x.nodeId);
        expect(nodes.length).toBeGreaterThanOrEqual(10);
        expect(withNodeId.length).toBeGreaterThan(1);
    }
    // Get all nodeIds from original tree
    const originalNodes = bfsFramerLayersTree(tree);
    const originalNodeIds = originalNodes
        .filter((x) => x.nodeId)
        .map((x) => x.nodeId);
    // Get all nodeIds from chunked trees
    const chunkedNodeIds = bfsFramerLayersTree(chunks.flat())
        .filter((x) => x.nodeId)
        .map((x) => x.nodeId);
    // Verify nodeIds match
    expect(originalNodeIds).toEqual(chunkedNodeIds);
});
test('extractObjectsFromXmlContent - basic', ({ expect }) => {
    const xml = dedent `
        Here is an Ai response with the <xml>:
        \`\`\`xml
        <Container nodeId="container1">
            <Hero nodeId="hero1">
                <text nodeId="text1" fontSize="20px" color="blue">
                    Hello World
                </text>
                <Button nodeId="btn1" variant="primary" size="large">
                    Click me
                </Button>
                <div >
                    <span nodeId="span1">
                    Nested content
                    with a new line
                    </span>
                </div>
            </Hero>
        </Container>
        \`\`\`

    `;
    const results = extractObjectsFromXmlContent(xml);
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "attributes": {},
          "newContent": "",
          "nodeId": "container1",
        },
        {
          "attributes": {},
          "newContent": "",
          "nodeId": "hero1",
          "parentId": "container1",
        },
        {
          "afterNodeId": "btn1",
          "attributes": {
            "color": "blue",
            "fontSize": "20px",
          },
          "newContent": "Hello World",
          "nodeId": "text1",
          "parentId": "hero1",
        },
        {
          "afterNodeId": "span1",
          "attributes": {
            "size": "large",
            "variant": "primary",
          },
          "beforeNodeId": "text1",
          "newContent": "Click me",
          "nodeId": "btn1",
          "parentId": "hero1",
        },
        {
          "attributes": {},
          "beforeNodeId": "btn1",
          "newContent": "Nested content
      with a new line",
          "nodeId": "span1",
          "parentId": "hero1",
        },
      ]
    `);
});
test('extractObjectsFromXmlContent - complex page structure', ({ expect }) => {
    const xml = dedent `
        <Desktop nodeId="desktop1" backgroundColor="/Gray-50">
            <NavigationFlyoutFixed nodeId="nav1" position="fixed" height="84px">
            </NavigationFlyoutFixed>
            <HeroSection nodeId="hero1" position="relative">
                <Container nodeId="container1" maxWidth="1152px">
                    <Content nodeId="content1">
                        <Header nodeId="header1">
                            <BadgeGroup nodeId="badge1">
                                <Text nodeId="text1">
                                    <LeadingText nodeId="lead1" inlineTextStyle="/Heading sm">
                                        4000+
                                    </LeadingText>
                                    <TrailingText nodeId="trail1" inlineTextStyle="/Heading sm">
                                        Users trust us
                                    </TrailingText>
                                </Text>
                            </BadgeGroup>
                            <Heading nodeId="heading1" inlineTextStyle="/undefined - Test 90">
                                Design Better, Faster, Smarter
                            </Heading>
                        </Header>
                    </Content>
                </Container>
            </HeroSection>
        </Desktop>
    `;
    const results = extractObjectsFromXmlContent(xml);
    // Add explicit checks for critical relationships
    const nav1 = results.find((n) => n.nodeId === 'nav1');
    const hero1 = results.find((n) => n.nodeId === 'hero1');
    const badge1 = results.find((n) => n.nodeId === 'badge1');
    const heading1 = results.find((n) => n.nodeId === 'heading1');
    const lead1 = results.find((n) => n.nodeId === 'lead1');
    const trail1 = results.find((n) => n.nodeId === 'trail1');
    // Check nav1 and hero1 are siblings under desktop1
    expect(nav1?.parentId).toBe('desktop1');
    expect(hero1?.parentId).toBe('desktop1');
    expect(nav1?.afterNodeId).toBe('hero1');
    expect(hero1?.beforeNodeId).toBe('nav1');
    // Check badge1 and heading1 are siblings under header1
    expect(badge1?.parentId).toBe('header1');
    expect(heading1?.parentId).toBe('header1');
    expect(badge1?.afterNodeId).toBe('heading1');
    expect(heading1?.beforeNodeId).toBe('badge1');
    // Check lead1 and trail1 are siblings under text1
    expect(lead1?.parentId).toBe('text1');
    expect(trail1?.parentId).toBe('text1');
    expect(lead1?.afterNodeId).toBe('trail1');
    expect(trail1?.beforeNodeId).toBe('lead1');
    // Check text content is correct
    expect(lead1?.newContent).toBe('4000+');
    expect(trail1?.newContent).toBe('Users trust us');
    expect(heading1?.newContent).toBe('Design Better, Faster, Smarter');
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "attributes": {
            "backgroundColor": "/Gray-50",
          },
          "newContent": "",
          "nodeId": "desktop1",
        },
        {
          "afterNodeId": "hero1",
          "attributes": {
            "height": "84px",
            "position": "fixed",
          },
          "newContent": "",
          "nodeId": "nav1",
          "parentId": "desktop1",
        },
        {
          "attributes": {
            "position": "relative",
          },
          "beforeNodeId": "nav1",
          "newContent": "",
          "nodeId": "hero1",
          "parentId": "desktop1",
        },
        {
          "attributes": {
            "maxWidth": "1152px",
          },
          "newContent": "",
          "nodeId": "container1",
          "parentId": "hero1",
        },
        {
          "attributes": {},
          "newContent": "",
          "nodeId": "content1",
          "parentId": "container1",
        },
        {
          "attributes": {},
          "newContent": "",
          "nodeId": "header1",
          "parentId": "content1",
        },
        {
          "afterNodeId": "heading1",
          "attributes": {},
          "newContent": "",
          "nodeId": "badge1",
          "parentId": "header1",
        },
        {
          "attributes": {},
          "newContent": "",
          "nodeId": "text1",
          "parentId": "badge1",
        },
        {
          "afterNodeId": "trail1",
          "attributes": {
            "inlineTextStyle": "/Heading sm",
          },
          "newContent": "4000+",
          "nodeId": "lead1",
          "parentId": "text1",
        },
        {
          "attributes": {
            "inlineTextStyle": "/Heading sm",
          },
          "beforeNodeId": "lead1",
          "newContent": "Users trust us",
          "nodeId": "trail1",
          "parentId": "text1",
        },
        {
          "attributes": {
            "inlineTextStyle": "/undefined - Test 90",
          },
          "beforeNodeId": "badge1",
          "newContent": "Design Better, Faster, Smarter",
          "nodeId": "heading1",
          "parentId": "header1",
        },
      ]
    `);
});
test('extractObjectsFromXmlContent - node movement scenarios', ({ expect }) => {
    const xml = dedent `
        <Root nodeId="root">
            <ContainerA nodeId="containerA">
                <Item nodeId="item1">Item 1</Item>
                <Item nodeId="item2">Item 2</Item>
            </ContainerA>
            <ContainerB nodeId="containerB">
                <Item nodeId="item3">Item 3</Item>
            </ContainerB>
        </Root>
    `;
    const results = extractObjectsFromXmlContent(xml);
    // Verify parent relationships
    const item1 = results.find((n) => n.nodeId === 'item1');
    const item2 = results.find((n) => n.nodeId === 'item2');
    const item3 = results.find((n) => n.nodeId === 'item3');
    expect(item1?.parentId).toBe('containerA');
    expect(item2?.parentId).toBe('containerA');
    expect(item3?.parentId).toBe('containerB');
    // Verify sibling relationships
    expect(item1?.afterNodeId).toBe('item2');
    expect(item2?.beforeNodeId).toBe('item1');
    expect(item3?.beforeNodeId).toBeUndefined();
    expect(item3?.afterNodeId).toBeUndefined();
});
test('extractObjectsFromXmlContent - deeply nested with missing nodeIds', ({ expect, }) => {
    const xml = dedent `
        <Page nodeId="page1">
            <Section nodeId="section1">
                <div>
                    <Content nodeId="content1">
                        <div>
                            <span>
                                <Text nodeId="text1">Hello</Text>
                            </span>
                        </div>
                    </Content>
                </div>
            </Section>
            <Section nodeId="section2">
                <Text nodeId="text2">World</Text>
            </Section>
        </Page>
    `;
    const results = extractObjectsFromXmlContent(xml);
    const text1 = results.find((n) => n.nodeId === 'text1');
    const text2 = results.find((n) => n.nodeId === 'text2');
    // text1 should have content1 as parent (skipping intermediate divs/spans without nodeIds)
    expect(text1?.parentId).toBe('content1');
    expect(text2?.parentId).toBe('section2');
});
test('extractObjectsFromXmlContent - creates temp IDs when enableNodeCreation is true', ({ expect, }) => {
    const xml = dedent `
        <Frame nodeId="root">
            <Frame width="200px" height="100px">
                <Text>New text content</Text>
            </Frame>
            <SVG svg="<svg></svg>" />
            <ComponentInstance componentId="comp123" />
        </Frame>
    `;
    const results = extractObjectsFromXmlContent(xml, { enableNodeCreation: true });
    // Check that temp IDs were created
    const tempNodes = results.filter(n => n.nodeId.startsWith('_temp_'));
    expect(tempNodes).toHaveLength(4); // Frame, Text, SVG, ComponentInstance
    // Check node types are detected correctly
    expect(tempNodes[0].nodeType).toBe('Frame');
    expect(tempNodes[1].nodeType).toBe('Text');
    expect(tempNodes[2].nodeType).toBe('SVG');
    expect(tempNodes[3].nodeType).toBe('ComponentInstance');
    expect(results).toMatchInlineSnapshot(`
      [
        {
          "attributes": {},
          "newContent": "",
          "nodeId": "root",
        },
        {
          "afterNodeId": "_temp_3",
          "attributes": {
            "height": "100px",
            "width": "200px",
          },
          "newContent": "",
          "nodeId": "_temp_1",
          "nodeType": "Frame",
          "parentId": "root",
        },
        {
          "attributes": {},
          "newContent": "New text content",
          "nodeId": "_temp_2",
          "nodeType": "Text",
          "parentId": "_temp_1",
        },
        {
          "afterNodeId": "_temp_4",
          "attributes": {
            "svg": "<svg></svg>",
          },
          "beforeNodeId": "_temp_1",
          "newContent": "",
          "nodeId": "_temp_3",
          "nodeType": "SVG",
          "parentId": "root",
        },
        {
          "attributes": {
            "componentId": "comp123",
          },
          "beforeNodeId": "_temp_3",
          "newContent": "",
          "nodeId": "_temp_4",
          "nodeType": "ComponentInstance",
          "parentId": "root",
        },
      ]
    `);
});
test('extractObjectsFromXmlContent - detects node types based on attributes', ({ expect, }) => {
    const xml = dedent `
        <Container nodeId="root">
            <Something>Text content here</Something>
            <Element svg="<svg></svg>" />
            <Node layout="stack" />
            <Item componentId="abc" />
            <Thing insertUrl="some-url" />
        </Container>
    `;
    const results = extractObjectsFromXmlContent(xml, { enableNodeCreation: true });
    // Filter out the root node
    const newNodes = results.filter(n => n.nodeId !== 'root');
    // Check node types
    expect(newNodes[0].nodeType).toBe('Text'); // has text content
    expect(newNodes[1].nodeType).toBe('SVG'); // has svg attribute
    expect(newNodes[2].nodeType).toBe('Frame'); // has layout attribute
    expect(newNodes[3].nodeType).toBe('ComponentInstance'); // has componentId
    expect(newNodes[4].nodeType).toBe('ComponentInstance'); // has insertUrl
});
test('extractObjectsFromXmlContent - single children have no siblings', ({ expect, }) => {
    const xml = dedent `
        <Page nodeId="page1">
            <Container nodeId="container1">
                <SingleChild nodeId="child1">Only child</SingleChild>
            </Container>
            <Container nodeId="container2">
                <FirstChild nodeId="child2">First</FirstChild>
                <SecondChild nodeId="child3">Second</SecondChild>
                <ThirdChild nodeId="child4">Third</ThirdChild>
            </Container>
        </Page>
    `;
    const results = extractObjectsFromXmlContent(xml);
    const child1 = results.find((n) => n.nodeId === 'child1');
    const child2 = results.find((n) => n.nodeId === 'child2');
    const child3 = results.find((n) => n.nodeId === 'child3');
    const child4 = results.find((n) => n.nodeId === 'child4');
    // Single child has no siblings
    expect(child1?.parentId).toBe('container1');
    expect(child1?.beforeNodeId).toBeUndefined();
    expect(child1?.afterNodeId).toBeUndefined();
    // Multiple children have correct siblings
    expect(child2?.beforeNodeId).toBeUndefined();
    expect(child2?.afterNodeId).toBe('child3');
    expect(child3?.beforeNodeId).toBe('child2');
    expect(child3?.afterNodeId).toBe('child4');
    expect(child4?.beforeNodeId).toBe('child3');
    expect(child4?.afterNodeId).toBeUndefined();
});
test('xml partial content, rewriteXmlContent', () => {
    const str = dedent `
  <Container>
    <Hero>
      <Header>
        <Stack>
          <AI_Kit_Badge nodeId="kvaze3i5">
          badge
          </AI_Kit_Badge>
          <text nodeId="BmPmnKu3U" fontSize="82px">
            The web builder for stunning sites.
          </text>
          <text nodeId="Ga6gDXZIe" fontSize="20px">
            Design and publish modern sites at any scale with Framer's web builder.
          </text>
          <AI_Kit_Button nodeId="rgayf1f9">
            Sign up for free
          </AI_Kit_Button>

  `;
    const newContent = [
        {
            nodeId: 'BmPmnKu3U',
            newContent: 'Hero replaced',
        },
        {
            nodeId: 'Ga6gDXZIe',
            newContent: 'Description replaced',
        },
        { nodeId: 'rgayf1f9', newContent: 'cta replaced' },
    ];
    const result = rewriteXmlContentForTests({ xml: str, newContent });
    expect(result).toMatchInlineSnapshot(`
          "<Container>
            <Hero>
              <Header>
                <Stack>
                  <AI_Kit_Badge nodeId="kvaze3i5">
                  badge
                  </AI_Kit_Badge>
                  <text nodeId="BmPmnKu3U" fontSize="82px">
                    Hero replaced
                  </text>
                  <text nodeId="Ga6gDXZIe" fontSize="20px">
                    Description replaced
                  </text>
                  <AI_Kit_Button nodeId="rgayf1f9">
                    cta replaced
                  </AI_Kit_Button>
          </Stack></Header></Hero></Container>"
        `);
});
test('oldTextTreeToXml', async () => {
    const res = framerLayersTreeToXml([
        {
            name: 'AI Kit/Nav',
            children: [
                {
                    nodeId: 'O6ldbjyTJ',
                    name: 'Stack',
                    children: [
                        {
                            content: 'Features',
                            nodeId: 'A3ZxD9MzX',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                        {
                            content: 'Developers',
                            nodeId: 'kEfI03xW5',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                        {
                            content: 'Company',
                            nodeId: 'hV4y0l50l',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            attributes: {
                                anObject: JSON.stringify({ a: 1, b: 2 }),
                                anArray: JSON.stringify([1, 2, 3]),
                            },
                            attrControlsComments: {
                                anObject: 'An object',
                                anArray: 'An array',
                            },
                            children: [],
                        },
                        {
                            content: 'Blog',
                            nodeId: 'Kn7sH0z2q',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            attributes: {
                                bool: 'true',
                                shouldBeHidden: 'false',
                            },
                            attrControlsComments: {
                                shouldBeHidden: '',
                            },
                            children: [
                                {
                                    content: 'Nested content',
                                    nodeId: 'a1b2c3',
                                    name: 'AI Kit/Navigation/Nav Top Item/Nested',
                                    children: [],
                                },
                            ],
                        },
                        {
                            content: 'Changelog',
                            nodeId: 'QjTxmhFlU',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                    ],
                },
                {
                    nodeId: 'JGJDKjLQs',
                    name: 'Stack',
                    children: [
                        {
                            content: 'Join waitlist',
                            nodeId: 'LrErZw5ej',
                            name: 'AI Kit/Button',
                            children: [],
                        },
                    ],
                },
            ],
        },
    ]);
    expect(res).toMatchInlineSnapshot(`
      "<AiKitNav>
        <Stack>
          <AiKitNavigationNavTopItem nodeId="A3ZxD9MzX">
            Features
          </AiKitNavigationNavTopItem>
          <AiKitNavigationNavTopItem nodeId="kEfI03xW5">
            Developers
          </AiKitNavigationNavTopItem>
          <AiKitNavigationNavTopItem
              nodeId="hV4y0l50l"
              <!-- An object -->
              anObject="{"a":1,"b":2}"
              <!-- An array -->
              anArray="[1,2,3]"
          >
            Company
          </AiKitNavigationNavTopItem>
          <AiKitNavigationNavTopItem bool="true" shouldBeHidden="false">
            Blog
            <AiKitNavigationNavTopItemNested nodeId="a1b2c3">
              Nested content
            </AiKitNavigationNavTopItemNested>
          </AiKitNavigationNavTopItem>
          <AiKitNavigationNavTopItem nodeId="QjTxmhFlU">
            Changelog
          </AiKitNavigationNavTopItem>
        </Stack>
        <Stack>
          <AiKitButton nodeId="LrErZw5ej">
            Join waitlist
          </AiKitButton>
        </Stack>
      </AiKitNav>
      "
    `);
});
test('maxCharacters limit truncates deep nodes', () => {
    // Create a tree where depth-1 nodes will get truncated
    const tree = [
        {
            name: 'Container1',
            nodeId: 'container1',
            attributes: {
                width: '100px',
                height: '200px',
            },
            content: 'Container with lots of content that will push us over the character limit quickly',
            children: [
                {
                    name: 'Child1',
                    nodeId: 'child1',
                    content: 'This child should be truncated',
                    children: [
                        {
                            name: 'GrandChild1',
                            nodeId: 'grandchild1',
                            content: 'This grandchild should definitely not appear',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Container2',
            nodeId: 'container2',
            content: 'Second container',
            children: [
                {
                    name: 'Child2',
                    nodeId: 'child2',
                    content: 'This should also be truncated',
                    children: [],
                },
            ],
        },
    ];
    // Test with a limit that truncates at depth 1
    const result = framerLayersTreeToXml(tree, { maxCharacters: 150 });
    expect(result).toMatchInlineSnapshot(`
      "<Container1 width="100px" height="200px">
        Container with lots of content that will push us over the character limit quickly
        <Child1>
          This child should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Child1>
      </Container1>
      <Container2>
        Second container
        <Child2 nodeId="child2">
          This should also be truncated
        </Child2>
      </Container2>
      "
    `);
});
test('maxCharacters with small limit', () => {
    const tree = [
        {
            name: 'Container',
            children: [
                {
                    name: 'Child',
                    children: [
                        {
                            name: 'GrandChild',
                            content: 'Deep content',
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];
    // Test with limit of 50 - should render first level then truncate
    const result = framerLayersTreeToXml(tree, { maxCharacters: 50 });
    expect(result).toMatchInlineSnapshot(`
      "<Container>
        <Child>
          <GrandChild>
            Deep content
          </GrandChild>
        </Child>
      </Container>
      "
    `);
});
test('maxCharacters with many deep nodes', () => {
    // Create a tree where second depth-1 container will be truncated
    const tree = [
        {
            name: 'SmallContainer', // This depth-1 will render fully
            content: 'First small container',
            children: [
                {
                    name: 'Child1',
                    content: 'Small child 1',
                    children: [],
                },
                {
                    name: 'Child2',
                    content: 'Small child 2',
                    children: [],
                },
            ],
        },
        {
            name: 'LargeContainer', // This depth-1 should get truncated
            content: 'Second large container that should trigger truncation',
            children: Array.from({ length: 10 }, (_, i) => ({
                name: `Node${i}`,
                content: `Node ${i} content that should be truncated`,
                children: Array.from({ length: 3 }, (_, j) => ({
                    name: `Deep${i}_${j}`,
                    content: `Deep content ${i}-${j}`,
                    children: [],
                })),
            })),
        },
        {
            name: 'ThirdContainer', // This depth-1 should also be truncated
            children: [
                {
                    name: 'ChildA',
                    content: 'This should also be truncated',
                    children: [],
                },
            ],
        },
    ];
    // With a limit that allows first container but truncates second
    const result = framerLayersTreeToXml(tree, { maxCharacters: 200 });
    expect(result).toMatchInlineSnapshot(`
      "<SmallContainer>
        First small container
        <Child1>
          Small child 1
        </Child1>
        <Child2>
          Small child 2
        </Child2>
      </SmallContainer>
      <LargeContainer>
        Second large container that should trigger truncation
        <Node0>
          Node 0 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node0>
        <Node1>
          Node 1 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node1>
        <Node2>
          Node 2 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node2>
        <Node3>
          Node 3 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node3>
        <Node4>
          Node 4 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node4>
        <Node5>
          Node 5 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node5>
        <Node6>
          Node 6 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node6>
        <Node7>
          Node 7 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node7>
        <Node8>
          Node 8 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node8>
        <Node9>
          Node 9 content that should be truncated
          <!-- Call getNodeXml on this node to get more details, character limit was reached -->
        </Node9>
      </LargeContainer>
      <ThirdContainer>
        <ChildA>
          This should also be truncated
        </ChildA>
      </ThirdContainer>
      "
    `);
});
test('componentId deduplication of attribute comments', () => {
    const tree = [
        {
            name: 'Root',
            children: [
                {
                    name: 'ComponentInstance',
                    nodeId: 'instance1',
                    attributes: {
                        componentId: 'comp123',
                        customProp: 'value1',
                        width: '100px',
                    },
                    attrControlsComments: {
                        componentId: 'the component id this instance uses',
                        customProp: 'A custom property for this component',
                        width: 'Width of the component',
                    },
                    children: [],
                },
                {
                    name: 'ComponentInstance',
                    nodeId: 'instance2',
                    attributes: {
                        componentId: 'comp123', // Same componentId
                        customProp: 'value2',
                        height: '200px',
                    },
                    attrControlsComments: {
                        componentId: 'the component id this instance uses',
                        customProp: 'A custom property for this component',
                        height: 'Height of the component',
                    },
                    children: [],
                },
                {
                    name: 'ComponentInstance',
                    nodeId: 'instance3',
                    attributes: {
                        componentId: 'comp456', // Different componentId
                        customProp: 'value3',
                    },
                    attrControlsComments: {
                        componentId: 'the component id this instance uses',
                        customProp: 'Another custom property',
                    },
                    children: [],
                },
            ],
        },
    ];
    const result = framerLayersTreeToXml(tree, { shouldAddNodeIdAlways: true });
    // Add inline snapshot to see the actual output
    expect(result).toMatchInlineSnapshot(`
      "<Root>
        <ComponentInstance
            nodeId="instance1"
            <!-- the component id this instance uses -->
            componentId="comp123"
            <!-- A custom property for this component -->
            customProp="value1"
            <!-- Width of the component -->
            width="100px"
         />
        <ComponentInstance
            nodeId="instance2"
            <!-- the component id this instance uses -->
            componentId="comp123"
            customProp="value2"
            height="200px"
         />
        <ComponentInstance
            nodeId="instance3"
            <!-- the component id this instance uses -->
            componentId="comp456"
            <!-- Another custom property -->
            customProp="value3"
         />
      </Root>
      "
    `);
    // First instance should have all comments
    expect(result).toContain('<!-- A custom property for this component -->');
    // Count occurrences of the custom property comment
    const customPropCommentCount = (result.match(/<!-- A custom property for this component -->/g) || []).length;
    // Should only appear once (for the first instance with comp123)
    expect(customPropCommentCount).toBe(1);
    // The componentId comment should appear for all instances (it's a non-component-specific comment)
    const componentIdCommentCount = (result.match(/<!-- the component id this instance uses -->/g) || []).length;
    expect(componentIdCommentCount).toBe(3);
    // Different component should have its own comment
    expect(result).toContain('<!-- Another custom property -->');
});
test('splitTreeInChunks', () => {
    const inputTree = [
        {
            name: 'AI Kit/Nav',
            children: [
                {
                    nodeId: 'O6ldbjyTJ',
                    name: 'Stack',
                    children: [
                        {
                            content: 'Features',
                            nodeId: 'A3ZxD9MzX',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                        {
                            content: 'Developers',
                            nodeId: 'kEfI03xW5',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                        {
                            content: 'Company',
                            nodeId: 'hV4y0l50l',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                        {
                            content: 'Blog',
                            nodeId: 'Kn7sH0z2q',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                        {
                            content: 'Changelog',
                            nodeId: 'QjTxmhFlU',
                            name: 'AI Kit/Navigation/Nav Top Item',
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Navigation/twitterProfilePreview',
            children: [
                {
                    name: 'Closed',
                    children: [
                        {
                            name: 'Link',
                            children: [
                                {
                                    name: 'Text',
                                    nodeId: 'l9D2UPiVw',
                                    attributes: {
                                        fontSize: '16px',
                                    },
                                    content: 'Twitter',
                                    children: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            name: 'RemoveButton',
            children: [
                {
                    name: 'Variant1',
                    children: [
                        {
                            name: 'Text',
                            nodeId: 'xRh2ZBpJM',
                            content: 'Sign Up With Google',
                            children: [],
                        },
                    ],
                },
            ],
        },
    ];
    const result = splitTreeInChunks(inputTree, 3).map((x) => framerLayersTreeToXml(x));
    expect(result).toMatchInlineSnapshot(`
      [
        "<AiKitNav>
        <Stack>
          <AiKitNavigationNavTopItem nodeId="A3ZxD9MzX">
            Features
          </AiKitNavigationNavTopItem>
        </Stack>
      </AiKitNav>
      ",
        "<AiKitNav>
        <Stack>
          <AiKitNavigationNavTopItem nodeId="kEfI03xW5">
            Developers
          </AiKitNavigationNavTopItem>
        </Stack>
      </AiKitNav>
      ",
        "<AiKitNav>
        <Stack>
          <AiKitNavigationNavTopItem nodeId="hV4y0l50l">
            Company
          </AiKitNavigationNavTopItem>
        </Stack>
      </AiKitNav>
      ",
        "<AiKitNav>
        <Stack>
          <AiKitNavigationNavTopItem nodeId="Kn7sH0z2q">
            Blog
          </AiKitNavigationNavTopItem>
        </Stack>
      </AiKitNav>
      ",
        "<AiKitNav>
        <Stack>
          <AiKitNavigationNavTopItem nodeId="QjTxmhFlU">
            Changelog
          </AiKitNavigationNavTopItem>
        </Stack>
      </AiKitNav>
      ",
        "<NavigationTwitterProfilePreview>
        <Closed>
          <Link>
            <Text nodeId="l9D2UPiVw" fontSize="16px">
              Twitter
            </Text>
          </Link>
        </Closed>
      </NavigationTwitterProfilePreview>
      ",
        "<RemoveButton>
        <Variant1>
          <Text nodeId="xRh2ZBpJM">
            Sign Up With Google
          </Text>
        </Variant1>
      </RemoveButton>
      ",
      ]
    `);
});
//# sourceMappingURL=xml.test.js.map