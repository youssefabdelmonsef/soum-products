import { createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../types/global";
import { LanguageState } from "../types/language";

const initialState = {} as LanguageState;

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, action: {payload: {language: 'ar' | 'en'}}) {
            state.language = action.payload.language;
        }
    }
  });
  
  export const { setLanguage } = languageSlice.actions;
  export const getLanguageSelector = (state: GlobalState) => state.language || {};
  export default languageSlice.reducer;