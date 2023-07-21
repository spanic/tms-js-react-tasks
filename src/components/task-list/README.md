# Task list

## Домашнee задание

### Цели

- научиться создавать узлы DOM и добавлять элементы на страницу
- научиться обрабатывать пользовательский ввод и события
- научиться отправлять HTTP-запросы на сервер и обрабатывать полученные данные

### Ссылки

- [JS DOM](https://javascript.info/document)
- [JS Events: handling mouse, keyboard inputs](https://javascript.info/event-details)
- [Fetch API: sending HTTP requests](https://javascript.info/network)

### Перед началом

1. Запустите React-приложение в DEV-режиме. Подробнее см. "Startup modes – React app + stubs server (dev. mode)" [в описании проекта](/README.md)
2. Перейдите на страницу `/task-list-v1` или выберите опцию "Task List (JS)" в боковом меню

### Описание

Перед вами шаблон компонента "Список задач".

1. Перед некоторыми из элементов в коде присутствует комментарий `/* Add it manually */`. Удалите (закомментируйте) указанные узлы со всей их вложенной структурой и добавьте их вручную с помощью JavaScript DOM API. Кнопка "Delete all" уже была добавлена заранее в качестве примера

   > ⚠️ Важно: логику создания элементов реализуйте внутри функции `useEffect()`

2. В данный момент задачи предопределены в коде компонента, вместо этого давайте получим их асинхронно с сервера

   1. Удалите оба блока `<div className="task-list__item task-list-item">` из файла вручную

   2. Отправьте `GET` запрос на `/tasks` и обработайте результат. Пример ответа сервера:

      ```json
      {
        "1": {
          "completed": true,
          "text": "Architecto aspernatur aut consectetur dicta, expedita iure laboriosam magni nesciunt nobis pariatur quae quas rem ullam? Dolor ex maxime temporibus vel velit."
        },
        "2": {
          "completed": false,
          "text": "A aliquam corporis cum, cumque debitis eius eligendi fuga fugit iusto molestiae necessitatibus nemo neque odio possimus quisquam recusandae tenetur ut. Nostrum?"
        }
      }
      ```

   3. Используя полученные данные, в цикле создайте соответствующее количество блоков задач
      > 💁🏻‍♂️ Совет: вместо того, чтобы создавать все вложенные узлы вручную по одному, используйте функцию [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

3. Также реализуйте следующий функционал:

   1. Добавление новой задачи в список по клику на кнопку "Add". Текст задачи нужно получать из поля `taskTextInput`

      > Если поле ввода пустое или содержит только пробелы, добавление задачи должно быть отменено. После добавления задачи очистите поле ввода

      > Чтобы задача добавлялась в список с анимацией, не забудьте добавить класс `task-list__item_animated`

   2. Удаление всех задач из списка по клику на кнопку "Delete all"

   3. Удаление выбранной задачи по клику на кнопку с иконкой "X"

      > Чтобы задача удалялась также с анимацией, добавьте блоку класс `task-list__item_animated-remove` непосредственно перед удалением

   4. Отметку задачи как завершенной по клику на кнопку "Complete". CSS-классы, которые необходимо добавить блоку с задачей, найдите в файле TaskList.scss самостоятельно

### Результат

Подключите юнит-тесты для данного компонента, удалив `x` перед `xdescribe` в файле [TaskList.spec.js](./TaskList.spec.js) и убедитесь, что все проверки завершаются успешно
