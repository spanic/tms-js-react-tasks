# Orders

## Домашнee задание

### Цели

- научиться работать с redux-saga
- научиться находить и подключать сторонние библиотеки в проект, использовать их для реализации нестандартного поведения
- научиться расширять и дополнять существующее решение, адаптировать его под новые требования

### Ссылки

- [Redux-Saga](https://redux-saga.js.org/)
- [компонент Ant Design Result](https://ant.design/components/result)
- [JavaScript Promise](https://learn.javascript.ru/promise-basics)

### Перед началом

Запустите Docker-контейнеры _mongo_ и _express_, а также React-приложение в DEV-режиме. Подробнее см. "Startup modes – React app (dev. mode) + stubs server + Mongo" [в описании проекта](/README.md)

### Описание

Компонент Orders позволяет оформлять заказы из ресторанов. В данном задании вам необходимо доработать его:

1. Перенесите из компонентов в saga все операции по получению/отправке данных в API `/orders/api`. Библиотека redux-saga уже добавлена в проект, используйте `src/components/orders/saga/orders.saga.js` как точку старта.

   > Некоторые компоненты асинхронно обрабатывают данные, полученные из API, например, `src/components/orders/Orders.js`:

   ```
   const onCreateNewOrder = (restaurantId, offersIds) => {
     initOrder(restaurantId, offersIds).then(() => {
       dispatch(clearNewOrderModalData());
       toggleModalOpen(false);
       fetchAndSaveOrders();
     });
   };
   ```

   > В этом случае вам понадобится библиотека, позволяющая вернуть Promise после обработки action в saga. Я рекомендую использовать [@adobe/redux-saga-promise](https://github.com/adobe/redux-saga-promise), но есть и альтернативы, например [redux-saga-promise-actions](https://github.com/tomekkleszcz/redux-saga-promise-actions). Подключите её самостоятельно.

2. Добавьте третий шаг в модал создания нового заказа (компонент `src/components/orders/components/new-order-modal/NewOrderModal.js`). Используйте компонент [Result](https://ant.design/components/result) из библиотеки Ant Design и пример ниже в качестве образца.

   ![Orders new modal confirmation step expected result](./assets/Orders%20new%20modal%20confirmation%20step%20ER.png)

   Функционал кнопки "Back to the list" - закрытие модала, очистка его состояния в redux store.

### Результат

При запуске `npm run serve` поведение должно соответствовать видеозаписи ниже:

[![New order acquisition flow ER](https://img.youtube.com/vi/DAtBLW3h50g/maxresdefault.jpg)](https://youtu.be/DAtBLW3h50g 'New order acquisition flow ER')

---

## Homework

### Goals

- learn how to use redux-saga
- learn how to find and add 3rd-party libraries into the project to implement a non-standard behavior
- practice extending and configuring existing solution to adopt it to the new requirements

### Links

- [Redux-Saga](https://redux-saga.js.org/)
- [Ant Design Result component](https://ant.design/components/result)
- [JavaScript Promise](https://learn.javascript.ru/promise-basics)

### Before you start

Launch _mongo_ and _express_ Docker containers, and start React application in DEV mode. See "Startup modes – React app (dev. mode) + stubs server + Mongo" [in the project's main README.md](/README.md)

### Description

Orders component allows to create orders for restaurants, like a regular delivery app. In this exercise you need to do the following with it:

1. Move all operations with API `/orders/api` out from components into saga. redux-saga library has been already added into the project, use `src/components/orders/saga/orders.saga.js` as an entrypoint.

   > Some of the components are asynchronously handling responses from API, for example see `src/components/orders/Orders.js`:

   ```
   const onCreateNewOrder = (restaurantId, offersIds) => {
     initOrder(restaurantId, offersIds).then(() => {
       dispatch(clearNewOrderModalData());
       toggleModalOpen(false);
       fetchAndSaveOrders();
     });
   };
   ```

   > In this case you may need a 3rd-party library, which allows to return Promise after action will be resolved in saga. I recommend to use [@adobe/redux-saga-promise](https://github.com/adobe/redux-saga-promise), but there are also some alternatives, like [redux-saga-promise-actions](https://github.com/tomekkleszcz/redux-saga-promise-actions). Follow the instructions, add this library to the project and use it by yourself.

2. Add the 3rd step into the new order configuration modal (`src/components/orders/components/new-order-modal/NewOrderModal.js` component). Use [Result](https://ant.design/components/result) component from Ant Design library and the example below for reference.

   ![Orders new modal confirmation step expected result](./assets/Orders%20new%20modal%20confirmation%20step%20ER.png)

   "Back to the list" button functionality - closing the modal and resetting its state in redux store.

### Result

After executing `npm run serve` the app should work like shown below:

[![New order acquisition flow ER](https://img.youtube.com/vi/DAtBLW3h50g/maxresdefault.jpg)](https://youtu.be/DAtBLW3h50g 'New order acquisition flow ER')
