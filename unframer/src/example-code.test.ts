import { describe, expect, test } from 'vitest'
import { configFromFetch, type Config } from './cli.js'
import { createExampleComponentCode } from './exporter.js'

describe(
    'createExampleComponentCode',
    () => {
        test('should create example component code', async () => {
            const projectId = 'cf755ed7d59e0319'

            const { config } = await configFromFetch({
                projectId,
                agent: 'test',
            })
            const { exampleCode } = await createExampleComponentCode({
                config,
                outDir: 'src',
            })
            expect(exampleCode).toMatchInlineSnapshot(`
              "import './src/styles.css'

              import NavigationFramerComponent from './src/navigation'
              import HeroFramerComponent from './src/hero'
              import PricingBannerFramerComponent from './src/pricing-banner'
              import FooterFramerComponent from './src/footer'
              import FeatureListFramerComponent from './src/feature-list'
              import ServiceSliderFramerComponent from './src/service-slider'
              import SectionTitleFramerComponent from './src/section-title'
              import ButtonFramerComponent from './src/button'
              import BrandLogoFramerComponent from './src/brand-logo'
              import TestmonialItemFramerComponent from './src/testmonial-item'
              import ArticlesCardFramerComponent from './src/articles-card'

              export default function App() {
                return (
                  <div className='flex flex-col items-center gap-3 bg-[rgb(8,_8,_7)]'>
                    <NavigationFramerComponent.Responsive
                      ctaVariant={"Primary"}
                    />
                    <HeroFramerComponent.Responsive/>
                    <PricingBannerFramerComponent.Responsive/>
                    <FooterFramerComponent.Responsive
                      year={"2024"}
                    />
                    <FeatureListFramerComponent.Responsive/>
                    <ServiceSliderFramerComponent.Responsive/>
                    <SectionTitleFramerComponent.Responsive
                      text={"We are pioneers in harnessing the power of Blockchain and Web3 technologies to drive innovation, security, and decentralization."}
                      title={"Smart Automation"}
                      tagline={"Systems and Building Web3"}
                      iconVisible={true}
                      textVisible={true}
                    />
                    <ButtonFramerComponent.Responsive
                      link={"/news"}
                      buttonTitle={"Read all blog"}
                      iconVisibility={true}
                    />
                    <BrandLogoFramerComponent.Responsive/>
                    <TestmonialItemFramerComponent.Responsive
                      name1={"Wade Warren"}
                      paragraph={"Security is non-negotiable in the decentralized world, and we take this aspect very seriously. Our solutions are built with a robust emphasis on security, utilizing advanced cryptographic"}
                      designation={"Flutter Developer"}
                    />
                    <ArticlesCardFramerComponent.Responsive
                      date={"Mar 06, 2024 "}
                      link={"/news/:slug"}
                      title={"Discoveries from Our Thinkers"}
                      excerpt={"Experience seamless integration with decentralized applications (DApps)."}
                    />
                  </div>
                );
              };"
            `)
        })

        test('should deduplicate imports when the same component is used multiple times on a page', async () => {
            // Repro: https://github.com/unframer/cooperative-walrus-79978/actions/runs/24262159135
            // When a component (e.g. `image-3`) was referenced twice on the index
            // page, the generated example code emitted two identical
            // `import Image3FramerComponent from './src/image-3'` lines which
            // made vite/rolldown fail with "Identifier has already been declared".
            const config: Config = {
                components: {
                    'image-3': 'https://example.com/image-3',
                    image: 'https://example.com/image',
                },
                componentInstancesInIndexPage: [
                    {
                        componentId: '1',
                        componentPathSlug: 'image-3',
                        controls: {},
                        nodeDepth: 0,
                        pageOrdering: 0,
                        webPageId: 'home',
                    },
                    {
                        componentId: '2',
                        componentPathSlug: 'image',
                        controls: {},
                        nodeDepth: 0,
                        pageOrdering: 1,
                        webPageId: 'home',
                    },
                    {
                        componentId: '3',
                        componentPathSlug: 'image-3',
                        controls: {},
                        nodeDepth: 0,
                        pageOrdering: 2,
                        webPageId: 'home',
                    },
                ],
            }

            const { exampleCode } = await createExampleComponentCode({
                config,
                outDir: 'src',
            })

            expect(exampleCode).toMatchInlineSnapshot(`
              "import './src/styles.css'

              import Image3FramerComponent from './src/image-3'
              import ImageFramerComponent from './src/image'

              export default function App() {
                return (
                  <div className='flex flex-col items-center gap-3 '>
                    <Image3FramerComponent.Responsive/>
                    <ImageFramerComponent.Responsive/>
                    <Image3FramerComponent.Responsive/>
                  </div>
                );
              };"
            `)

            // Each import identifier should only appear once in the import list
            const importLines = exampleCode
                .split('\n')
                .filter((line) => line.startsWith('import '))
            const image3Imports = importLines.filter((line) => {
                return line.includes("from './src/image-3'")
            })
            expect(image3Imports).toHaveLength(1)

            // But the component should still render twice in JSX
            const image3Jsx = exampleCode
                .split('\n')
                .filter((line) => {
                    return line.includes('<Image3FramerComponent.Responsive')
                })
            expect(image3Jsx).toHaveLength(2)
        })

        test('should only disambiguate duplicate import names', async () => {
            const config: Config = {
                components: {
                    'card/work-card': 'https://example.com/card',
                    'cards/work-card': 'https://example.com/cards',
                    'shared/nav/framer-nav': 'https://example.com/nav',
                },
                componentInstancesInIndexPage: [
                    {
                        componentId: '1',
                        componentPathSlug: 'card/work-card',
                        controls: {},
                        nodeDepth: 0,
                        pageOrdering: 0,
                        webPageId: 'home',
                    },
                    {
                        componentId: '2',
                        componentPathSlug: 'cards/work-card',
                        controls: {},
                        nodeDepth: 0,
                        pageOrdering: 1,
                        webPageId: 'home',
                    },
                    {
                        componentId: '3',
                        componentPathSlug: 'shared/nav/framer-nav',
                        controls: {},
                        nodeDepth: 0,
                        pageOrdering: 2,
                        webPageId: 'home',
                    },
                ],
            }

            const { exampleCode } = await createExampleComponentCode({
                config,
                outDir: 'src',
            })

            expect(exampleCode).toContain(
                "import CardWorkCardFramerComponent from './src/card/work-card'",
            )
            expect(exampleCode).toContain(
                "import CardsWorkCardFramerComponent from './src/cards/work-card'",
            )
            expect(exampleCode).toContain(
                "import FramerNavFramerComponent from './src/shared/nav/framer-nav'",
            )
        })
    },
    1000 * 10,
)
