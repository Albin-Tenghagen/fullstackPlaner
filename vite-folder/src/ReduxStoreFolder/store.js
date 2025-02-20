import { configureStore } from "@reduxjs/toolkit";
import travelReducer from "../ReducerFolder/travelSlice";

// Load travels from localStorage
const loadState = () => {
  try {
    const serializedTravels = localStorage.getItem("travels");
    return serializedTravels
      ? {
          travel: {
            travels: JSON.parse(serializedTravels),
            modal: { isOpen: false, modalType: null, data: null }, // Ensure modal is always present
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
  preloadedState: loadState(), // Preload state from localStorage if available
});

// Save travels to localStorage on every state change
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("travels", JSON.stringify(state.travel.travels));
  } catch (err) {
    console.error("Could not save travels to localStorage", err);
  }
});

export default store;
