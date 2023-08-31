import { test, expect } from 'vitest'
import { getFontsStyles } from '.'

test('getFontsStyles', () => {
    const style = getFontsStyles([
        {
            fonts: [
                {
                    family: 'Syne',
                    moduleAsset: {
                        localModuleIdentifier:
                            'local-module:canvasComponent/rXuKNGhVw:default',
                        url: 'https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_0KuT6kR47NCV5Z.ttf',
                    },
                    style: 'normal',
                    url: 'https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_0KuT6kR47NCV5Z.ttf',
                    weight: '500',
                },
            ],
        },
    ])
    expect(style).toMatchInlineSnapshot('"@font-face { font-family: \'Syne\'; src: url(https://fonts.gstatic.com/s/syne/v16/8vIS7w4qzmVxsWxjBZRjr0FKM_0KuT6kR47NCV5Z.ttf); font-style: normal; font-weight: 500; }"')
})
