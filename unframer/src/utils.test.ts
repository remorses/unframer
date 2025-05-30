import { describe, it, expect } from 'vitest'
import { dedent } from './utils'

describe('dedent', () => {
    it('should remove common indentation from template literals', () => {
        const result = dedent`
            Hello world
            This is a test

            With multiple lines
        `
        expect(result).toMatchInlineSnapshot(`
          "
          Hello world
          This is a test

          With multiple lines
          "
        `)
    })

    it('should handle mixed indentation levels', () => {
        const result = dedent`
            function example() {
                const x = 1
                if (x) {
                    console.log('hello')
                }
            }
        `
        expect(result).toMatchInlineSnapshot(`
          "
          function example() {
              const x = 1
              if (x) {
                  console.log('hello')
              }
          }
          "
        `)
    })

    it('should handle template values', () => {
        const name = 'world'
        const count = 42
        const result = dedent`
            Hello ${name}!
            The count is ${count}
            End of message
        `
        expect(result).toMatchInlineSnapshot(`
          "
          Hello world!
          The count is 42
          End of message
          "
        `)
    })

    it('should handle empty lines and preserve relative indentation', () => {

        const result = dedent`
            Start

                Indented line

            End
        `
        expect(result).toMatchInlineSnapshot(`
          "
          Start

              Indented line

          End
          "
        `)
    })

    it('should handle single line', () => {
        const result = dedent`Single line`
        expect(result).toMatchInlineSnapshot(`"Single line"`)
    })

    it('should handle lines with only whitespace', () => {
        const result = dedent`
            Line 1

            Line 3
        `
        expect(result).toMatchInlineSnapshot(`
          "
          Line 1

          Line 3
          "
        `)
    })
})
