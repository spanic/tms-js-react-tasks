# Airport schedule

## Домашние задания 11 - 12

### Цели

- научиться работать с `props`
- научиться изменять состояние компонентов
- понять отличия stateful от stateless компонентов, научиться выносить бизнес-логику и логику изменения состояния наружу
- научиться обрабатывать события в дочерних компонентах

### Описание

Перед вами компонент, отображающий текущие и запланированные авиарейсы из Национального аэропорта Минск. Вам необходимо доработать существующий функционал:

1. В компонент `Flight`, отвечающий непосредственно за отображение информации о рейсе в строке таблицы, нужно добавить функцию `getAirlineData` из родительского компонента `Airport` в качестве обработчика события `click` на `FlightScheduleRow`.

   ℹ️ Данная функция предназначена для получения информации об авиакомпании, выполняющей выбранный рейс.

   > _Обратите внимание, что эта функция должна вызываться именно из `Airport` (для того, чтобы сделать компонент `Flight` максимально "глупым", и вынести всю бизнес-логику во вне его). Для этого передайте `getAirlineData` как `prop`_

2. Реализуйте функцию getAirlineData:

   2.1. Проверьте значение поля `selected` в объекте, переданном в `Flight` и инвертируйте его

   2.2. Отправьте `GET` запрос на `/airlabs/api/airlines?icao_code=${flight.airline_icao}`, обработайте результат и присвойте значение свойства name в `selectedFlight.additional_data.airline_name`

   2.3 Обновите состояние компонента `Airport`, вызвав функцию `setFlights` с обновленным списком рейсов в качестве аргумента

   > ⚠️ Важно: состояние мутировать нельзя! [Вот, почему](https://react.dev/learn/updating-objects-in-state#why-is-mutating-state-not-recommended-in-react). Поэтому, создайте копию исходного массива `flights`, перед тем, как обновить состояние компонента.

### Результат

- Информация об авиакомпании для каждого из выбранных рейсов динамически загружается и отображается в компоненте `Flight`.
- Дополнительно: убедитесь, что при подгрузке доп. информации по клику на рейс остальные строки в таблице React **не рендерит заново**. Воспользуйтесь расширением для [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) или [Mozilla](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) (вкладка "Profiler"). Используйте https://react.dev/reference/react/memo, если повторный рендеринг всё-таки происходит.

## Домашние задания 13 - 14

### Цели

- научиться использовать основные React Hooks: useState, useEffect, useMemo
- научиться отслеживать этапы жизненного цикла компонента
- попрактиковаться в декларативном функциональном стиле описания состояний компонента
- закрепить имеющиеся навыки работы с React

### Описание

Продолжим насыщать функционалом наш компонент `Airport`.

Теперь вам необходимо доработать его таким образом, чтобы у пользователя имелась возможность переключаться между различными аэропортами. В качестве компонента select будем использовать [соответствующий компонент из библиотеки Ant Design](https://ant.design/components/select).

Алгоритм действий следующий:

1. Добавьте в state компонента `Airport` поля, хранящие информацию обо всех аэропортах, о выбранном аэропорте и о выбранном типе запроса (arrival или departure)

   > Подсказка: **не нужно хранить массив необработанных данных обо всех аэропортах**: он достаточно большой и содержит много лишних данных. К тому же, нам впоследствии для дополнения данных о рейсах нужна будет `Map` `icao_code: name`. Логично будет сохранить непосредственно её

2. После первого рендера компонента получите с сервера информацию об аэропортах. Для этого отправьте `GET` запрос на `/airlabs/api/airports` и обработайте результат

3. Сохраните словарь с аэропортами (см. подсказку в п. 1) в state компонента `Airport`

4. После того, как состояние обновится, подпишитесь на изменение значений arrival / departure – в этом случае вы должны также обновить состояние компонента, и затем вызовите функцию `emitChangeEventForCheckedReqTypeInputEl` – она отправит событие change для выбранной radio-button или выберет одну из них по-умолчанию

5. Теперь вам необходимо сформировать массив значений для элементов выпадающего списка селектора аэропорта. Ознакомьтесь с документацией на сайте и реализуйте функцию `getAirportsDropdownValues`.

   > Подсказка: результат функции сохраните с использованием `useMemo` - это позволит избежать ресурсоемкой обработки словаря с данными об аэропортах при последующих обновлениях состояния компонента.

6. Последний шаг – получение информации о рейсах: если выбранные пользователем тип запроса и аэропорт есть в state компонента `Airport`, отправьте запрос на сервер с помощью функции `getScheduledFlights`, обработайте и дополните результат с помощью `updateFlightsWithExtendedAirportData` – и обновите состояние

### Результат:

При запуске `npm run serve` поведение должно соответствовать видеозаписи ниже:

https://youtu.be/Og1abyb341M

> Не забудьте зарегистрироваться на сервисе [Airlabs](https://airlabs.co/) и добавить `AIRLABS_API_KEY={your_airlabs_key}` в файл `.env` в корневой папке проекта