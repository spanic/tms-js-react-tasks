# TeachMeSkills JavaScript tasks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run serve`

Triggers the `npm run build` command above and serves the prod-bundled applicaiton from the `build` folder on [http://localhost:4000](http://localhost:4000). Uses [Vercel's serve](https://github.com/vercel/serve) inside.

### `npm run prettier`

Manully runs [Prettier](https://prettier.io/) for some of the project files, see the configuration for details.

### `npm run lint`

Same, but for [ESLint](https://eslint.org/)

### `npm run build:js`

Bundles `src/js/public.js` using [rollup](https://rollupjs.org/) & copies it to the `/public` directory, avoiding built-in React application bundler.
