import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TaskList from './components/task-list/TaskList';
import Airport from './components/airport/Airport';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Airport />
    <TaskList />
    <App />
  </>
);

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
