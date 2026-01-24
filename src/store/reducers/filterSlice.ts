import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFilterState {
  cursor: string | null;
  ordering: string | null;
  genres: string | null;
  tags: string | null;
}

interface FilterState {
  movieFilters: IFilterState;
  directorFilters: IFilterState;
}

const initialFilterGroup: IFilterState = {
  cursor: null,
  ordering: null,
  genres: null,
  tags: null,
};

const initialState: FilterState = {
  movieFilters: { ...initialFilterGroup },
  directorFilters: { ...initialFilterGroup },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setMovieFilter: (state, action: PayloadAction<Partial<IFilterState>>) => {
      state.movieFilters = { ...state.movieFilters, ...action.payload };
    },
    setDirectorFilter: (
      state,
      action: PayloadAction<Partial<IFilterState>>,
    ) => {
      state.directorFilters = { ...state.directorFilters, ...action.payload };
    },
    resetMovieFilters: (state) => {
      state.movieFilters = { ...initialFilterGroup };
    },
    resetDirectorFilters: (state) => {
      state.directorFilters = { ...initialFilterGroup };
    },
    resetFilters: () => initialState,
  },
});

export const {
  setMovieFilter,
  setDirectorFilter,
  resetMovieFilters,
  resetDirectorFilters,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
