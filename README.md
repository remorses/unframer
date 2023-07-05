<div align='center'>
    <br/>
    <br/>
    <h3>installable-framer</h3>
    <p>project under heavy development</p>
    <br/>
    <br/>
</div>

install framer components as packages

-   works in Nodejs, bun, cloudflare workers, etc
-   no need to install deps separately
-   add typescript support
-   many components in one package?
-   support for other frameworks (svelte, vue, etc)

## Usage

1. Copy the framer component url
   ![url import](./assets/framer-url-import.png)
2. Replace `framer.com` with `installable-framer.vercel.app`
3. `npm install {url}`
4. Import the component inside your `jsx` files, the package name used will be the component name

## Example

```
npm i https://installable-framer.vercel.app/m/Mega-Menu-2wT3.js@W0zNsrcZ2WAwVuzt0BCl
```

```tsx
import Component from 'mega-menu-2wt3'

export default function App() {
    return <Component />
}
```
