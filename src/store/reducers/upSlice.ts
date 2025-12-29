import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UpState {
  showButton: boolean;
}

const initialState: UpState = {
  showButton: false,
};

export const upSlice = createSlice({
  name: 'up',
  initialState,
  reducers: {
    setShowButton: (state, action: PayloadAction<boolean>) => {
      state.showButton = action.payload;
    },
  },
});

export const { setShowButton } = upSlice.actions;
export default upSlice.reducer;
