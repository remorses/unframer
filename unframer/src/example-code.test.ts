import { expect, describe, test } from 'vitest'
import { createExampleComponentCode } from './exporter.js'
import { componentNameToPath } from './utils.js'
import { Config, configFromFetch } from './cli.js'

describe('createExampleComponentCode', () => {
    test('should create example component code', async () => {
        const projectId = '620e74c088cdcb26'

        const { config } = await configFromFetch({ projectId })
        const { exampleCode } = await createExampleComponentCode({
            config,
            outDir: 'src',
        })
        expect(exampleCode).toMatchInlineSnapshot(`
          "import './src/styles.css'

          import NavigationFramerComponent from './src/navigation'
          import TopContentFramerComponent from './src/top-content'
          import FooterFramerComponent from './src/footer'
          import TestimonialsFramerComponent from './src/testimonials'
          import LogosFramerComponent from './src/logos'
          import TabsContentFramerComponent from './src/tabs-content'

          export default function App() {
              return (
                  <div className='flex flex-col'>
                      <NavigationFramerComponent.Responsive/>
                      <TopContentFramerComponent.Responsive/>
                      <FooterFramerComponent.Responsive
                          year={"2024"}
                      />
                      <TestimonialsFramerComponent.Responsive/>
                      <LogosFramerComponent.Responsive
                          invert={0}
                      />
                      <TabsContentFramerComponent.Responsive/>
                  </div>
              );
          };"
        `)
    })
}, 1000 * 10)
