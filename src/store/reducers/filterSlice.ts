import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  cursor: string | null;
  genres: string | null;
  tags: string | null;
  ordering: string | null;
}

const initialState: FilterState = {
  cursor: null,
  genres: null,
  tags: null,
  ordering: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<Partial<FilterState>>) {
      return { ...state, ...action.payload };
    },
    resetPagination: (state) => {
      state.cursor = null;
    },
    resetFilters: () => initialState,
  },
});

export const { setFilter, resetPagination, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
