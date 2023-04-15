import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import App from './App.js';
import Airport from './components/airport/Airport.js';
import ShopItem from './components/context/ShopItem.js';
import Lifecycle from './components/lifecycle/Lifecycle.js';
import Main from './components/main/Main.js';
import Shop from './components/shop/Shop.js';
import TaskList from './components/task-list/TaskList.js';
import TaskListWithReact from './components/task-list/v2/TaskList.js';

import './index.css';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Navigate to="/intro" replace />,
      },
      {
        path: 'intro',
        element: <App />,
      },
      {
        path: 'task-list-v1',
        element: <TaskList />,
      },
      {
        path: 'task-list-v2',
        element: <TaskListWithReact />,
      },
      {
        path: 'lifecycle',
        element: <Lifecycle />,
      },
      {
        path: 'schedule',
        element: <Airport />,
      },
      {
        path: 'context',
        element: <ShopItem />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}></RouterProvider>);

/**
 * Add scripts as cjs modules via require() to include them inside the main JS bundle
 */
// require('./js/lesson_1');
// require('./js/lesson_2');
// require('./js/lesson_3');
// require('./js/lesson_4');
// require('./js/lesson_5');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
