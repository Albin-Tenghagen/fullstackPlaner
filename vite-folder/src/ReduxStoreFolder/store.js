// src/ReduxStoreFolder/store.js
import { configureStore } from "@reduxjs/toolkit";
import travelReducer from "../ReducerFolder/travelSlice";
import counterReducer from "../ReducerFolder/counterSlice"; // if you’re using this
import modalReducer from "../ReducerFolder/modalSlice";
export const store = configureStore({
  reducer: {
    travel: travelReducer,
    counter: counterReducer,
  },
});

export default store;
