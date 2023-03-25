import { useEffect } from 'react';
import './TaskList.scss';

/**
 * Перед вами шаблон компонента "Список задач". Добавьте указанные узлы со всей их вложенной структурой вручную с помощью JavaScript DOM API.
 * В качестве примера воспользуйтесь логикой, описанной внутри хука ``` useEffect() ```. Порядок действий:
 * 1. Комментируете имеющийся узел
 * 2. Реализуете логику его добавления __вручную__ внутри ``` useEffect() ```
 *
 * Также реализуйте следующий функционал:
 * 1. Добавление новой задачи в список по клику на кнопку "Add". Текст задачи нужно получать из поля ``` taskTextInput ```.
 *    Если поле ввода пустое или содержит только пробелы, добавление задачи должно быть отменено. После добавления задачи, очистите поле ввода.
 *    Чтобы задача добавлялась в список с анимацией, не забудьте добавить класс ``` task-list__item_animated ```.
 *
 *    Совет: чтобы не создавать вручную всю внутреннюю структуру блока с задачей, в рамках данного упражнения вы можете использовать функцию ``` insertAdjacentHTML ``` (подумайте, как именно).
 *
 * 2. Удаление всех задач из списка по клику на кнопку "Delete all"
 * 3. Удаление выбранной задачи по клику на кнопку с иконкой "X". Чтобы задача удалялась также с анимацией, добавьте блоку класс ``` task-list__item_animated-remove ``` непосредственно перед удалением
 * 4. Отметку задачи как завершенной по клику на кнопку "Complete". CSS-классы, которые необходимо добавить блоку с задачей, найдите в файле TaskList.scss самостоятельно
 *
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
     * First task item (<div className="task-list__item">)
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
        {/* Пример:
          <button className="task-list-button-new">
            <span className="task-list-button-new__top">Delete all</span>
          </button>
          <button className="task-list-button-new">
            <span className="task-list-button-new__top">Delete last</span>
          </button>
        */}
        {/* Добавьте вручную: */}
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
        {/* Добавьте вручную: */}
        <div>
          Total: <span>2</span>
        </div>
        <div>
          Completed: <span>1</span>
        </div>
        <button className="task-list__button">Show all</button>
        {/* Добавьте вручную: */}
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
        {/* Добавьте вручную: */}
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
        </div>
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
