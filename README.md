<div align='center'>
    <br/>
    <br/>
    <h3>installable-framer</h3>
    <br/>
    <br/>
</div>

install framer components as packages

-   Works with any React framework (Next.js, Gatsby, Vite, etc)
-   Includes all your components dependencies
-   Has Typescript support, inferred from your component variables (like `variant`)

Planned features:

-   Support for other frameworks (svelte, vue, etc)

## Usage

1. Install the package

    ```
    npm install installable-framer framer-motion
    ```

1. Create an `installable-framer.json` file like the following (the key will be used for the component folder inside `outDir`)

    ```
    {
        "outDir": "./framer",
        "components": {
            "logos": "https://framer.com/m/Logo-Ticker-1CEq.js@YtVlixDzOkypVBs3Dpav",
            "menus": "https://framer.com/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl"
        }
    }

    ```

1. Copy your framer component url and add it to your config (remove the part after `@` to always use the latest version)

    ![url import](./assets/framer-url-import.png)

1. Run the command `npx installable-framer` to download the components and their types in the `outDir` directory
1. Import the component inside your `jsx` files, for example

```tsx
import Menu from './framer/menus'

export default function App() {
    return <Menu />
}
```

## Example

Look at the [nextjs-app](./nextjs-app) folder for an example
