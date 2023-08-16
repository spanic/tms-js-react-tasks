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

Перед вами шаблон компонента "Список задач"

1. Перед некоторыми из элементов в коде присутствует комментарий `/* Add it manually */`. Удалите (закомментируйте) указанные узлы со всей их вложенной структурой и добавьте их вручную с помощью JavaScript DOM API. Кнопка "Delete all" уже была добавлена заранее в качестве примера

   > ⚠️ Важно: логику создания элементов реализуйте внутри функции `useEffect()`

2. В данный момент задачи в компоненте не отображаются. Давайте получим их асинхронно с сервера

   1. Отправьте `GET` запрос на `/tasks` и обработайте результат. Пример ответа сервера:

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

   2. Используя полученные данные, в цикле создайте соответствующее количество блоков задач
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

---

## Homework

### Goals

- learn how to create DOM nodes and how to add elements to the page
- learn how to handle user's input and events
- try sending HTTP-requests to the API server and working with response data

### Links

- [JS DOM](https://javascript.info/document)
- [JS Events: handling mouse, keyboard inputs](https://javascript.info/event-details)
- [Fetch API: sending HTTP requests](https://javascript.info/network)

### Before you start

1. Start the React application in DEV mode. See "Startup modes – React app + stubs server (dev. mode)" [in the project description](/README.md)
2. Navigate to `/task-list-v1` or choose the option "Task List (JS)" from the side panel

### Description

Here you see the "Task List" component template.

1. Before some of the tags in code there's a comment `/* Add it manually */`. Please delete (or just comment) those elements with their entire inner structure and add them manually instead using JavaScript DOM API. As an example, button "Delete all" has been already added

   > ⚠️ Note: please implement this logic for creating now elements inside the `useEffect()` function. This is not "true React way of doing things" yet, but this is how it works

2. Now as you can see there are no tasks displayed in the component. Let's try to fetch them asynchronously from the API server

   1. Send the `GET` request to `/tasks` endpoint and handle the response. Here's the example data you'd get:

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

   2. Using the data you received create Task blocks inside the loop
      > 💁🏻‍♂️ Tip: instead of creating all the inner nodes manually one by one, use [insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) function

3. Also please implement the following functionality:

   1. Adding new Task into the list by clicking the "Add" button. Text for the new Task should be taken from `taskTextInput` field

      > If the input field is empty or contains just spaces, you should cancel the operation and do not add anything to the list. After successfully adding new Task the input field should be cleared

      > To make the Task appear smoothly with animation, do not forget to add class `task-list__item_animated`

   2. Removing all the Tasks from the list by clicking the "Delete all" button

   3. Deleting selected task by clicking the "X" button

      > To make the deleting operation animated, add the `task-list__item_animated-remove` class to the Task block right before it will be removed

   4. Marking the Task as completed by clicking the "Complete" button. CSS-classes you need to add to the Task block you can find by yourself in the TaskList.scss file

### Result

Enable unit-tests for this component by removing `x` from `xdescribe` in the [TaskList.spec.js](./TaskList.spec.js) and make sure that all the checks completes successfully
