import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';

import ordersReducer from './components/orders/orders.state.js';
import ordersSaga from './components/orders/saga/orders.saga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ['meta'],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(ordersSaga);
