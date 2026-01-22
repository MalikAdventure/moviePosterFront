import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MoviesPaginationState {
  currentCursor: string | null;
}

const initialState: MoviesPaginationState = {
  currentCursor: null,
};

const paginationSlice = createSlice({
  name: 'moviesPagination',
  initialState,
  reducers: {
    setMoviesCursor: (state, action: PayloadAction<string | null>) => {
      state.currentCursor = action.payload;
    },
    resetMoviesPagination: (state) => {
      state.currentCursor = null;
    },
  },
});

export const { setMoviesCursor, resetMoviesPagination } =
  paginationSlice.actions;
export default paginationSlice.reducer;
