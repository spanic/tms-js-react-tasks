import { useEffect, useState } from 'react';

import '../TaskList.scss';

import Task from './components/Task';

function TaskList() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    async function fetchTasks() {
      const tasksObj = await fetch('/tasks/v2').then(
        (response) => response.ok && response.json()
      );
      const tasks = initTasksMap(tasksObj);
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  function initTasksMap(tasksObj) {
    return new Map(Object.entries(tasksObj));
  }

  async function onComplete(task, key) {
    await fetch(`/tasks/v2/${key}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: true }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const completedTaskObj = { ...tasks.get(key), completed: true };
    const tasksCopy = new Map(tasks);
    tasksCopy.set(key, completedTaskObj);
    setTasks(tasksCopy);
  }

  return (
    <div id="task-list" className="task-list">
      <div className="task-list__row">
        <button className="task-list__button">Delete last</button>
        <button className="task-list__button">Delete all</button>
        <input
          id="taskTextInput"
          className="task-list__input"
          type="text"
          placeholder="Enter your task here..."
        ></input>
        <button id="addBtn" className="task-list__button">
          Add
        </button>
      </div>
      <div className="task-list__row">
        <div>
          Total: <span>2</span>
        </div>
        <div>
          Completed: <span>1</span>
        </div>
        <button className="task-list__button">Show all</button>
        <button className="task-list__button" disabled>
          Show completed
        </button>
        <input
          className="task-list__input"
          type="search"
          placeholder="Search..."
          disabled
        ></input>
      </div>

      <div className="task-list__container">
        {tasks &&
          Array.from(tasks.entries()).map(([key, task]) => (
            <Task
              key={key}
              task={task}
              complete={() => onComplete(task, key)}
            />
          ))}
      </div>
    </div>
  );
}

export default TaskList;
