import { useEffect } from 'react';

import './TaskList.scss';

function TaskList() {
  useEffect(() => {
    /**
     * Getting tasks from the server
     */
    fetch('/tasks')
      .then((response) => response.ok && response.json())
      .then((data) => {
        // ...
      });

    /**
     * "Delete all" button
     */
    const deleteAllButton = document.createElement('button');
    deleteAllButton.className = 'task-list__button';
    const deleteAllButtonText = document.createTextNode('Delete all');

    deleteAllButton.append(deleteAllButtonText);
    const firstControlsRow =
      document.getElementsByClassName('task-list__row')[0];
    firstControlsRow.prepend(deleteAllButton);

    /**
     * "Enter your task here..." input
     */
    // ...

    /**
     * "Total:" div
     */
    // ...

    /**
     * "Show completed" button
     */
    // ...

    /**
     * Add new task
     */
    // ...

    /**
     * Delete all tasks
     */
    // ...

    /**
     * Delete task
     */
    // ...

    /**
     * Complete task
     */
    // ...
  }, []);

  return (
    <div id="task-list" className="task-list">
      <div className="task-list__row">
        {/* Add it manually: */}
        {/* <button className="task-list__button">Delete all</button> */}
        <button className="task-list__button">Delete last</button>
        {/* Add it manually: */}
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
        {/* Add it manually: */}
        <div>
          Total: <span>2</span>
        </div>
        <div>
          Completed: <span>1</span>
        </div>
        <button className="task-list__button">Show all</button>
        {/* Add it manually: */}
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
      <div className="task-list__container"></div>
    </div>
  );
}

export default TaskList;
