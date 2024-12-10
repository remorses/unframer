<div align='center'>
    <br/>
    <br/>
    <h3>unframer</h3>
    <br/>
    <br/>
</div>

Download framer components as simple files

-   Works with any React framework (Next.js, Remix, Vite, etc)
-   Includes all your components dependencies
-   Has Typescript support, inferred from your component variables (like `variant`)

## Usage

1. Install the package

    ```sh
    npm install unframer
    ```

1. Install the [`React Export` Framer plugin](https://www.framer.com/marketplace/plugins/react-export/), open it and select which components you want to export.

<div align="center">
    <img src="./assets/select-components.jpeg" width="600" />
</div>

1. Run the command `npx unframer {projectId} --outDir ./src/framer` to download the components and their types in the `outDir` directory, the command will be shown in the Framer plugin too. Run this command each time you update your Framer project and want to update the components.

1. Import the component inside your `jsx` files together with the `styles.css` file, for example

```tsx
import './framer/styles.css' // load base Framer styles
import Menu from './framer/menus'

export default function App() {
    return (
        <div>
            <Menu componentVariable='some variable' />
        </div>
    )
}
```

## Using responsive variants

```tsx
import './framer/styles.css'
import Logos from './framer/logos'

export default function App() {
    return (
        <div>
            {/* Changes component variant based on breakpoint */}
            <Logos.Responsive
                variants={{
                    lg: 'Desktop Variant',
                    md: 'Tablet Variant',
                    base: 'Mobile Variant',
                }}
            />
        </div>
    )
}
```

## Styling

You can use `className` or `style` props to style your components

Notice that you will often need to use `!important` to override styles already defined in framer like `width` and `height`

```tsx
import './framer/styles.css'
import Logos from './framer/logos'

export default function App() {
    return (
        <div>
            {/* Changes component variant based on breakpoint */}
            <Logos.responsive
                className='!w-full'
                variants={{
                    lg: 'Desktop',
                    md: 'Tablet',
                    base: 'Mobile',
                }}
            />
        </div>
    )
}
```

## Sizing components

Framer components can have a fixed size, this comes from the root element in the Framer component editor. To override this size you will need to use the `style` prop or use a class with high specificity.

```tsx
import './framer/styles.css'
import Logos from './framer/logos'

export default function App() {
    return (
        <div>
            <Logos.responsive
                className='!w-full' // use !important to override framer default size
                style={{ width: '100%' }} // or use style prop, which has higher specificity than the Framer class
                variants={{
                    lg: 'Desktop',
                    md: 'Tablet',
                    base: 'Mobile',
                }}
            />
        </div>
    )
}
```

## Troubleshooting

If you find any errors rendering your components:

-   Check you have the latest version of `unframer` installed
-   Try downloading new versions of the components by running again `npx unframer {projectId}`, Framer may already have fixed the problem.
-   Try disabling React strict mode, this can cause many issues in Framer components.

## Supported component props

`unframer` will add TypeScript definitions for your Framer components props and variables, some example variables you can use are:

-   `variant`, created when you use variants in Framer
-   functions, created when you use an `event` variable in Framer
-   Any scalar variable like String, Number, Boolean, Date, etc
-   Image variables (object with `src`, `srcSet` and `alt`), created when you use an `image` variable in Framer
-   Link strings, created when you make a link a variable in Framer
-   Rich text, created when you use a `richText` variable in Framer
-   Color, a string
-   React component, created when you use a `component` variable in Framer, for example in the Ticker component

## Known limitations:

-   Internationalization is not supported now

-   You may face React warnings like:
    -   `Accessing element.ref was removed in React 19.` This warning appears because Framer still uses the old `element.ref` API which was removed in React 19. This warning is harmless and will be fixed when Framer updates their codebase to use the new React 19 APIs.
    -   `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties.` This warning sometimes appears when using SWV icons, it should be harmless, it only happens in development mode.

## Future Compatibility

Every Framer runtime change is upstreamed automatically via Github Actions to this [file](unframer/src/framer.js) and an example app is deployed [here](https://unframer-nextjs-app.vercel.app/). This means that if something breaks it's easy to bisect the specific change and fix it.

For example in May 2024 Framer upgraded to React 19 and unframer broke, the reason was that framer runtime no longer injected ssr styles to `head` because react should do it automatically from version 19, this however broke unframer when using react 18, but i was able to quickly fix it by adding back the code to inject styles to `head` in unframer.

## Example

Look at the [nextjs-app source code folder](./nextjs-app) for an example and [the deployed website here](https://unframer-nextjs-app.vercel.app/)
