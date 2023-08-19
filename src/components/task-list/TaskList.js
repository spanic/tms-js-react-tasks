import { useEffect } from 'react';

import './TaskList.scss';

function TaskList() {
  useEffect(() => {
    /**
     * Getting tasks from the server
     */
    getTasks();

    /**
     * "Delete all" button
     */
    const deleteAllButton = document.createElement('button');
    deleteAllButton.className = 'task-list__button';
    deleteAllButton.setAttribute(
      'data-cy',
      'task-list-v.1-task-remove-all-btn'
    );

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
        {/* <button
          className="task-list__button"
          data-cy="task-list-v.1-task-remove-all-btn"
        >
          Delete all
        </button> */}
        <button className="task-list__button">Delete last</button>
        {/* Add it manually: */}
        <input
          id="taskTextInput"
          className="task-list__input"
          type="text"
          placeholder="Enter your task here..."
          data-cy="task-list-v.1-text-input"
        ></input>
        <button
          id="addBtn"
          className="task-list__button"
          data-cy="task-list-v.1-add-task-btn"
        >
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
      <div
        className="task-list__container"
        data-cy="task-list-v.1-container"
      ></div>
    </div>
  );
}

function getTasks() {
  // ...
}

function addTask(text, animated = false) {
  const taskListContainer = document.querySelector('div.task-list__container');
  taskListContainer.insertAdjacentHTML(
    'afterbegin',
    `
    <div data-cy="task-list-v.1-task" class="task-list__item task-list-item ${
      animated ? 'task-list__item_animated' : ''
    }">
      <div class="task-list-item__chevron"></div>
      <span class="task-list-item__text">
        ${text}
      </span>
      <div class="task-list-item__controls">
        <div class="task-list__row">
          <button class="task-list__button task-list__button_complete" data-cy="task-list-v.1-task-complete-btn">
            Complete
          </button>
          <button class="task-list__button task-list__button_remove" data-cy="task-list-v.1-task-remove-btn"></button>
        </div>
        <span class="task-list-item__created-date">
          02.03.2023 00:13 GMT+6
        </span>
      </div>
    </div>
    `
  );
}

export default TaskList;
