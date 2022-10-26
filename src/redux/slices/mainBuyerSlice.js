import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  full_name: "",
  //invited_by: "",
  gender: "" /* male or female*/,
  email: "",
  phone: "",
  //instagram_handle: "",
  favorite_dj: "",
  special_considerations: "",
};

export const mainBuyerSlice = createSlice({
  name: "mainBuyer",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.full_name = action.payload;
    },
    setInvitedBy: (state, action) => {
      //state.invited_by = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phone = action.payload;
    },
    setInstagramHandle: (state, action) => {
      //state.instagram_handle = action.payload;
    },
    setFavoriteDJ: (state, action) => {
      state.favorite_dj = action.payload;
    },
    setSpecialConsiderations: (state, action) => {
      state.special_considerations = action.payload;
    },
    setAll: (state, action) => {
      state.full_name = action.payload.full_name;
      // state.invited_by = action.payload.invited_by;
      state.gender = action.payload.gender;
      state.email = action.payload.email;
      //state.instagram_handle = action.payload.instagram_handle;
      state.phone = action.payload.phone;
      state.special_considerations = action.payload.special_considerations;
      state.favorite_dj = action.payload.favorite_dj;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setFullName,
  setInvitedBy,
  setGender,
  setEmail,
  setPhoneNumber,
  setInstagramHandle,
  setFavoriteDJ,
  setSpecialConsiderations,
  setAll,
} = mainBuyerSlice.actions;

export default mainBuyerSlice.reducer;
