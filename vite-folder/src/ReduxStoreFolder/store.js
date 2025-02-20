import { configureStore } from "@reduxjs/toolkit";
import travelReducer from "../ReducerFolder/travelSlice";

const loadState = () => {
  try {
    const serializedTravels = localStorage.getItem("travels");
    return serializedTravels
      ? {
          travel: {
            travels: JSON.parse(serializedTravels),
            modal: { isOpen: false, modalType: null, data: null }, //
          },
        }
      : undefined;
  } catch (err) {
    console.error("Could not load travels from localStorage", err);
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("travels", JSON.stringify(state.travel.travels));
  } catch (err) {
    console.error("Could not save travels to localStorage", err);
  }
});

export default store;
