import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ContextState {
  contextPage: string;
}

const initialState: ContextState = {
  contextPage: '',
};

export const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    setContextPage: (state, action: PayloadAction<string>) => {
      state.contextPage = action.payload;
    },
  },
});

export const { setContextPage } = contextSlice.actions;
export default contextSlice.reducer;
