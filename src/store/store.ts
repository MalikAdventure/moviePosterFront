import { combineReducers, configureStore } from '@reduxjs/toolkit';
import upReducer from './reducers/upSlice';
import moviesPaginationReducer from './reducers/moviesPaginationSlice';
import languageReducer from './reducers/languageSlice';
import { api } from '../services/movieServices';

const rootReducer = combineReducers({
  upReducer,
  moviesPaginationReducer,
  languageReducer,
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
