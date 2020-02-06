# Svelte Webpack Template
This project is a starter kit for building app using [Svelte](https://svelte.dev/) and [Webpack](https://webpack.js.org/) with easy setup and customization.
<br>

## Features
- dev server with live reload and error messages
- minimal webpack setup
- Handling static assets and various file formats
- Checking for duplicate modules and packages in bundles
- static serving scripts
- easy to customize and update

## Quick Start
``` bash
git clone https://github.com/faraadi/svelte-webpack-template
cd svelte-webpack-template
npm install
npm start
```
open [localhost:3000](http://localhost:3000) in your browser.

## Scripts
### start - dev
packs and compile your code and run development server on port `3000` and watch for file changes.

### build
build your application and make a optimized and minified version of your code and put it in `dist` directory.
<br>
all assets in `public` folder will be copied in `dist` directory.

> <strong>Warning!</strong> all assets placed in `dist`, will be removed when running this script

### serve
after running a successful build, you can run this script to preview a local version of your app.
<br>
run:
```bash
npm run build
npm run serve
```
then open [localhost:5000](http://localhost:5000)

## Customization
customization is straightforward and can be done through configuration files, placed in `/configs` directory.
<br>
you'll find two file:
- `webpack.config.dev.js` - for development mode
- `webpack.config.prod.js` - for production mode

## Inspirations
- [template-webpack](https://github.com/sveltejs/template-webpack)
## To Do
- vendors and runtime code splitting
- env support
- env config files
- Polyfills
- ESLint support
- Source Code Analyze Tool
## Author
 - [Farhad Sharifi](https://twitter.com/faradivar)

## License
This software is open sourced under [MIT](https://github.com/faraadi/svelte-webpack-template/blob/master/LICENSE).