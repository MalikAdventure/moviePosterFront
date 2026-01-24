import { combineReducers, configureStore } from '@reduxjs/toolkit';
import upReducer from './reducers/upSlice';
import contextReducer from './reducers/contextSlice';
import filterReducer from './reducers/filterSlice';
// import languageReducer from './reducers/languageSlice';
import { api } from '../services/movieServices';

const rootReducer = combineReducers({
  upReducer,
  contextReducer,
  filterReducer,
  // languageReducer,
  [api.reducerPath]: api.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
