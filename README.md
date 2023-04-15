# TeachMeSkills JavaScript tasks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick start
1. Install [Node.js](https://nodejs.org/en/download/)
2. Fork this repository
3. Open it in your IDE
4. Run `npm install` in terminal
5. Create a new Git branch from `master`
6. Enable tests for the homework tasks you're going to solve (remove `x` from `xdescribe(...)` in the appropriate `spec.js` file)
7. Run `npm run test`
8. Check the failed tests, implement the requested functionality
9. Press `q` when all the tests are green (passed) or yellow (skipped)
10. Execute `git add .`, `git commit -m "{your_commit_message}"`, `git push origin {your_branch_name}` - or use IDE's GUI for the same
11. Check the Github Actions tab - your last CI job execution should be green
12. Create a pull-request to this repository

## Startup modes

| Mode                                         | Description                                                                 | Steps                                                                                                                                                                                                                                  |
|----------------------------------------------|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| React app + stubs server (dev. mode)         | Hot reload for React app and stubs server, no DB, no Docker                 | 1️⃣ `npm i` <br> 2️⃣ `npm run start`                                                                                                                                                                                                      |
| React app + stubs server (dev. mode) + Mongo | Same as above, but connected to MongoDB served in Docker                    | 1️⃣ `npm i` <br> 2️⃣ Create `.env` file <br> 3️⃣ For the first time – `docker compose -f docker-compose.yml up mongo --build` <br> 3️⃣-a. Start __mongo__ container from Docker Desktop GUI <br> 4️⃣ `npm run start:with-db`                  |
| React app (dev. mode) + stubs server + Mongo | Hot reload for React app, stubs server and MongoDB will be served in Docker | 1️⃣ `npm i` <br> 2️⃣ Create `.env` file <br> 3️⃣ For the first time – `docker compose -f docker-compose.yml up --build` <br> 3️⃣-a. Start __tms-js-react-tasks__ containers from Docker Desktop GUI <br> 4️⃣ `npm run start:with-docker`      |
| React app (prod. mode)                       | No hot reload, stubs server and MongoDB will be served in Docker            | 1️⃣ `npm i` <br> 2️⃣ Create `.env` file <br> 3️⃣ For the first time – `docker compose -f docker-compose.yml up --build` <br> 3️⃣-a. Start __tms-js-react-tasks__ containers from Docker Desktop GUI <br> 4️⃣ `npm run serve`                  |

## Using Docker

This application comes with 2 images to be served in Docker: __express__ (for stubs server) and __mongo__ (MongoDB).\
⚠️ Before using them don't forget to create the `.env` file in the project root folder with the following contents:

> `MONGO_USER={username}`\
> `MONGO_PASSWORD={password}`\
> `MONGO_DB=tasks`\
> `MONGO_INITDB_ROOT_USERNAME={root_username}`\
> `MONGO_INITDB_ROOT_PASSWORD={root_password}`\
> `MONGO_INITDB_DATABASE=admin`

and replace the data in `{...}` by your own preference.

## Available Scripts

### `npm run start`

Concurrently runs npm scripts to start application in development mode. App itself will be running on [http://localhost:3000](http://localhost:3000), stubs server will be listening port 3001. The page will reload when you make changes.

### `npm run start:with-db`

Same as `npm run start`, but stubs server will try to connect to pre-configured MongoDB database instance running in __mongo__ Docker container.

### `npm run start:with-docker`
Hot reload will be available only for React app, assuming that you've already launched docker with both __express__ and __mongo__ containers.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run serve`

Triggers the `npm run build` command above and serves the prod-bundled applicaiton from the `build` folder on [http://localhost:4000](http://localhost:4000). Uses [Express](https://expressjs.com/) inside.

### `npm run prettier`

Manully runs [Prettier](https://prettier.io/) for some of the project files, see the configuration for details.

### `npm run lint`

Same, but for [ESLint](https://eslint.org/)

### `npm run build:js`

Bundles `src/js/public.js` using [rollup](https://rollupjs.org/) & copies it to the `/public` directory, avoiding built-in React application bundler.
