import { createSlice } from "@reduxjs/toolkit";
//
//TODO Hello world
//!
//?
//*
const initialTravelState = {
  travels: [],
};

const travelSlice = createSlice({
  name: "travel",
  // initialTravelState,
  // reducers: {
  //  addActivity(state, action) {
  //     state.activities.push(action.payload)
  //     console.log("This is a da state", state)
  //     console.log("this is our action", action)
  //  },
  //  removeActivity(state, action) {
  //     console.log("This is a da state", state)
  //     console.log("this is our action", action)
  //  },
  // },
});

export const { addActivity } = travelSlice.actions;

export default travelSlice.reducer;
