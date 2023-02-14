# TeachMeSkills JavaScript tasks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start
1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository
3. Open it in your IDE
4. Run `npm install` in terminal
5. Create a new Git branch from `master`
6. Run `npm run test`
7. Check the failed tests, implement the requested functions
8. Press `q` when all the tests are green (passed) or yellow (skipped)
9. Execute `git add .`, `git commit -m "{your_commit_message}"`, `git push origin {your_branch_name}` - or use IDE's GUI for the same
10. Check the Github Actions tab - your last CI job execution should be green
11. Create a pull-request to this repository


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
