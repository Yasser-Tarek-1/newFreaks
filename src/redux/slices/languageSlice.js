import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    reduxLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reduxLanguage } = languageSlice.actions;

export default languageSlice.reducer;
