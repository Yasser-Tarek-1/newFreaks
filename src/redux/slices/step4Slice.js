import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  error: false,
  userName: "",
  userEmail: "",
  isTermsOpen: false,
};

export const step4Slice = createSlice({
  name: "step4",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setTermsOpen: (state, action) => {
      state.isTermsOpen = true;
    },
  },
});

export const { setId, setError, setUserName, setUserEmail, setTermsOpen } =
  step4Slice.actions;

export default step4Slice.reducer;
