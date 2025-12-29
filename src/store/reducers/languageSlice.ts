import { createSlice } from '@reduxjs/toolkit';
// import i18next from 'i18next';

const initialState = {
  language: sessionStorage.getItem('language') || 'ru',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === 'ru' ? 'en' : 'ru';
      sessionStorage.setItem('language', state.language);
      // i18next.changeLanguage(state.language);
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
