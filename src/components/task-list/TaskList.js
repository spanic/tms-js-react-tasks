import { useEffect } from 'react';

import './TaskList.scss';

function TaskList() {
  useEffect(() => {
    const firstControlsRow =
      document.getElementsByClassName('task-list__row')[0];

    /**
     * "Delete all" button
     */
    const deleteAllButton = document.createElement('button');
    deleteAllButton.className = 'task-list__button';
    const deleteAllButtonText = document.createTextNode('Delete all');

    deleteAllButton.append(deleteAllButtonText);
    firstControlsRow.prepend(deleteAllButton);

    /**
     * "Delete last" button
     */
    const deleteLastButton = deleteAllButton.cloneNode(true);
    deleteLastButton.firstChild.textContent = 'Delete last';
    firstControlsRow.prepend(deleteLastButton);

    /**
     * "Enter your task here..." input
     */
    function createElementWithClass(tag, ...className) {
      const element = document.createElement(tag);
      if (className) {
        element.classList.add(...className);
      }
      return element;
    }

    function createButtonWithClass(...className) {
      const button = createElementWithClass('button', ...className);
      return button;
    }

    const enterTaskInput = createElementWithClass('input', 'task-list__input');
    enterTaskInput.setAttribute('id', 'taskTextInput');
    enterTaskInput.setAttribute('type', 'text');
    enterTaskInput.setAttribute('placeholder', 'Enter your task here...');

    const lastElementOfRow = firstControlsRow.lastElementChild;
    lastElementOfRow.before(enterTaskInput);

    const secondControlsRow =
      document.getElementsByClassName('task-list__row')[1];
    /**
     * "Total:" div
     */
    const totalTextBlock = createElementWithClass('div');
    totalTextBlock.innerHTML = 'Total: <span>2</span>';
    secondControlsRow.prepend(totalTextBlock);

    /**
     * "Show completed" button
     */
    const showCompletedButton = createElementWithClass(
      'button',
      'task-list__button'
    );
    showCompletedButton.setAttribute('disabled', '');
    showCompletedButton.textContent = 'Show completed';
    const nextChildElementOfShowCompletedButton =
      secondControlsRow.querySelector('.task-list__input');
    nextChildElementOfShowCompletedButton.before(showCompletedButton);

    /**
     * First task item (<div className="task-list__item">)
     */
    const taskListContainer = document.querySelector('.task-list__container');

    const blockOfTask = createElementWithClass(
      'div',
      'task-list__item',
      'task-list-item'
    );

    const arrayInBlockTask = createElementWithClass(
      'div',
      'task-list-item__chevron'
    );

    const textInBlockTask = createElementWithClass(
      'span',
      'task-list-item__text'
    );
    textInBlockTask.textContent =
      'Occaecat adipisicing dolor labore eu nostrud amet fugiat. Occaecat dolor aute mollit aute. Ad laborum elit Lorem exercitation non proident excepteur cupidatat deserunt ut cillum sit. Cupidatat quis sint velit ea consequat minim.';

    const controlsInBlockTask = createElementWithClass(
      'div',
      'task-list-item__controls'
    );

    const rowInControlsInBlockTask = createElementWithClass(
      'div',
      'task-list__row'
    );

    const buttonCompleteInBlockTask = createButtonWithClass(
      'task-list__button',
      'task-list__button_complete'
    );
    buttonCompleteInBlockTask.textContent = 'Complete';

    const buttonRemoveInBlockTask = createButtonWithClass(
      'task-list__button',
      'task-list__button_remove'
    );

    const dateInBlockTask = createElementWithClass(
      'span',
      'task-list-item__created-date'
    );
    dateInBlockTask.textContent = '02.03.2023 00:13 GMT+6';

    taskListContainer.prepend(blockOfTask);
    blockOfTask.prepend(arrayInBlockTask);
    arrayInBlockTask.after(textInBlockTask);
    textInBlockTask.after(controlsInBlockTask);
    controlsInBlockTask.prepend(rowInControlsInBlockTask);
    controlsInBlockTask.append(dateInBlockTask);
    rowInControlsInBlockTask.prepend(buttonCompleteInBlockTask);
    rowInControlsInBlockTask.append(buttonRemoveInBlockTask);

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
        {/* Пример:
          <button className="task-list-button-new">
            <span className="task-list-button-new__top">Delete all</span>
          </button>
          <button className="task-list-button-new">
            <span className="task-list-button-new__top">Delete last</span>
          </button>
        */}
        {/* Добавьте вручную: */}
        {/* <input
          id="taskTextInput"
          className="task-list__input"
          type="text"
          placeholder="Enter your task here..."
        ></input> */}
        <button id="addBtn" className="task-list__button">
          Add
        </button>
      </div>
      <div className="task-list__row">
        {/* Добавьте вручную: */}
        {/* <div>
          Total: <span>2</span>
        </div> */}
        <div>
          Completed: <span>1</span>
        </div>
        <button className="task-list__button">Show all</button>
        {/* Добавьте вручную: */}
        {/* <button className="task-list__button" disabled>
          Show completed
        </button> */}
        <input
          className="task-list__input"
          type="search"
          placeholder="Search..."
          disabled
        ></input>
      </div>
      <div className="task-list__container">
        {/* Добавьте вручную: */}
        {/* 
        <div className="task-list__item task-list-item">
          <div className="task-list-item__chevron"></div>
          <span className="task-list-item__text">
            Occaecat adipisicing dolor labore eu nostrud amet fugiat. Occaecat
            dolor aute mollit aute. Ad laborum elit Lorem exercitation non
            proident excepteur cupidatat deserunt ut cillum sit. Cupidatat quis
            sint velit ea consequat minim.
          </span>
          <div className="task-list-item__controls">
            <div className="task-list__row">
              <button className="task-list__button task-list__button_complete">
                Complete
              </button>
              <button className="task-list__button task-list__button_remove"></button>
            </div>
            <span className="task-list-item__created-date">
              02.03.2023 00:13 GMT+6
            </span>
          </div>
        </div> */}
        <div className="task-list__item task-list-item">
          <div className="task-list-item__chevron"></div>
          <span className="task-list-item__text">
            Reprehenderit exercitation consequat occaecat laboris excepteur.
            Lorem consequat pariatur aute incididunt velit culpa consequat
            proident occaecat magna culpa esse qui veniam. Minim proident
            occaecat eiusmod id non minim officia aliqua.
          </span>
          <div className="task-list-item__controls">
            <div className="task-list__row">
              <button className="task-list__button task-list__button_complete">
                Complete
              </button>
              <button className="task-list__button task-list__button_remove"></button>
            </div>
            <span className="task-list-item__created-date">
              02.03.2023 00:29 GMT+6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
