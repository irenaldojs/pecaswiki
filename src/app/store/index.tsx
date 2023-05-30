import { configureStore } from '@reduxjs/toolkit';

import optionsReducer from './optionsSlice';
import pagesReducer from './pagesSlice';


export const store = configureStore({
  reducer: {
    options: optionsReducer,
    pages: pagesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
