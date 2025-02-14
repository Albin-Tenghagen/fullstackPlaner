// //TODO här kommer storen vara
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../ReducerFolder/counterSlice";
import travelSlice from "../ReducerFolder/travelSlice"

const store = configureStore({
  reducer: {
    counter: counterSlice,
    travelArray: travelSlice
  },
});

export default store;
