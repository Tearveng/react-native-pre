import {combineReducers, configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterSlice from '../counter/counterSlice';

const rootProducer = combineReducers({
  counter: counterSlice,
});

const store = configureStore({
  reducer: rootProducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootProducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
