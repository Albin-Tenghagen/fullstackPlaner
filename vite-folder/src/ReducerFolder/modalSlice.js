import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  objectToEdit: null,
};

const modalSlice = createSlice({
  name: "modal",
});

export default modalSlice.reducer;
