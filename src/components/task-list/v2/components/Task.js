export default function Task({ task, complete }) {
  return (
    <div
      className={`task-list__item task-list-item ${
        task.completed && 'task-list-item_completed'
      }`}
    >
      <div className="task-list-item__chevron"></div>
      <span
        className={`task-list-item__text ${
          task.completed && 'task-list-item__text_completed'
        }`}
      >
        {task.text}
      </span>
      <div className="task-list-item__controls">
        <div className="task-list__row">
          <button
            className="task-list__button task-list__button_complete"
            onClick={complete}
          >
            Complete
          </button>
          <button className="task-list__button task-list__button_remove"></button>
        </div>
        <span className="task-list-item__created-date">
          02.03.2023 00:29 GMT+6
        </span>
      </div>
    </div>
  );
}
