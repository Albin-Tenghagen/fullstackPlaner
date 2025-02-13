// //TODO här kommer storen vara
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ReducerFolder/counterReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
