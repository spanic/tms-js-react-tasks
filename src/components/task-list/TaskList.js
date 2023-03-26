import { useEffect } from 'react';
import './TaskList.scss';

/**
 * Перед вами шаблон компонента "Список задач". Добавьте указанные узлы со всей их вложенной структурой вручную с помощью JavaScript DOM API.
 * В качестве примера воспользуйтесь логикой, описанной внутри хука ``` useEffect() ```. Порядок действий:
 * 1. Комментируете имеющийся узел
 * 2. Реализуете логику его добавления __вручную__ внутри ``` useEffect() ```
 *
 * @returns TaskList component
 */
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
    const addsInput = document.createElement('input');
    
    addsInput.classList.add('task-list__input');
    addsInput.setAttribute('type', 'text');
    addsInput.setAttribute('placeholder', 'Enter your task here...');

    const parentDivElement = document.querySelector('div.task-list__row');
    const refElement = parentDivElement.lastElementChild;

    parentDivElement.insertBefore(addsInput, refElement);

    /**
     * "Total:" div
     */
    const addsDivTotal = document.createElement('div');
    const addsTextNote = document.createTextNode('Total: ');
    const addsSpanTotal = document.createElement('span');
    const addsTextNoteTotal = document.createTextNode('2');

    addsDivTotal.append(addsTextNote);
    addsDivTotal.append(addsSpanTotal);
    addsSpanTotal.append(addsTextNoteTotal);

    const parentElement = document.querySelectorAll('div.task-list__row');
    const childDiv = parentElement[1].querySelector('div');

    parentElement[1].insertBefore(addsDivTotal, childDiv);
    
    
    /**
     * "Show completed" button
     */
    const addsButton = document.createElement('button');
    const addsTextNoteButton = document.createTextNode('Show completed');

    addsButton.append(addsTextNoteButton);
    addsButton.classList.add('task-list__button');
    addsButton.setAttribute('disabled', '');

    const childInput = parentElement[1].querySelector('input');
    parentElement[1].insertBefore(addsButton, childInput);


    /**
     * First task item (<div className="task-list__item">)
     */
    
    const addsParentDivTaskListItem = document.createElement('div');
    const addsDivTaskListItemShevron = document.createElement('div');
    const addsSpanTaskListItem = document.createElement('span');
    const addsTextNoteSpanTaskListItem = document.createTextNode('Occaecat adipisicing dolor labore eu nostrud amet fugiat. Occaecat dolor aute mollit aute. Ad laborum elit Lorem exercitation non proident excepteur cupidatat deserunt ut cillum sit. Cupidatat quis sint velit ea consequat minim.');
    const addsDivTaskListItemControls = document.createElement('div');
    const addsDivTaskListItemRow = document.createElement('div');
    const addsButtonTaskListItemComplete = document.createElement('button');
    const addsTextNoteButtonTaskListItemComplete = document.createTextNode('Complete');
    const addsButtonTaskListItemRemove = document.createElement('button');
    const addsSpanTaskListItemCreatedDate = document.createElement('span');
    const addsTextNodeSpanTaskListItemCreatedDate = document.createTextNode('02.03.2023 00:13 GMT+6');

    addsParentDivTaskListItem.classList.add('task-list__item');
    addsParentDivTaskListItem.append(addsDivTaskListItemShevron);
    addsDivTaskListItemShevron.classList.add('task-list-item__chevron');
    addsParentDivTaskListItem.append(addsSpanTaskListItem);
    addsSpanTaskListItem.append(addsTextNoteSpanTaskListItem);
    addsParentDivTaskListItem.append(addsDivTaskListItemControls);
    addsDivTaskListItemControls.classList.add('task-list-item__controls');
    addsDivTaskListItemControls.append(addsDivTaskListItemRow);
    addsDivTaskListItemRow.classList.add('task-list__row');
    addsDivTaskListItemRow.append(addsButtonTaskListItemComplete);
    addsButtonTaskListItemComplete.classList.add('task-list__button', 'task-list__button_complete');
    addsButtonTaskListItemComplete.append(addsTextNoteButtonTaskListItemComplete);
    addsDivTaskListItemRow.append(addsButtonTaskListItemRemove);
    addsButtonTaskListItemRemove.classList.add('task-list__button', 'task-list__button_remove');
    addsDivTaskListItemControls.append(addsSpanTaskListItemCreatedDate);
    addsSpanTaskListItemCreatedDate.classList.add('task-list-item__created-date');
    addsSpanTaskListItemCreatedDate.append(addsTextNodeSpanTaskListItemCreatedDate);


    const parentDivTaskListContainer = document.querySelector('div.task-list__container');
    const firstChildTaskListContainer = parentDivTaskListContainer.firstChild;

    parentDivTaskListContainer.insertBefore(addsParentDivTaskListItem, firstChildTaskListContainer);
 
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
          className="task-list__input"
          type="text"
          placeholder="Enter your task here..."
        ></input> */}
        <button className="task-list__button">Add</button>
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
        {/* <div className="task-list__item">
          <div className="task-list-item__chevron"></div>
          <span>
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
        <div className="task-list__item">
          <div className="task-list-item__chevron"></div>
          <span>
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
