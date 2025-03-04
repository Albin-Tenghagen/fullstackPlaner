import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  travels: [],
  modal: {
    isOpen: false,
    modalType: null,
    data: null,
  },
};

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    addTravel: (state, action) => {
      // action.payload should include all keys of the travel object
      console.log("This is our state", state);
      console.log("This is our action", action);
      state.travels.push({
        ...action.payload,
        activities: action.payload.activities || [], // ensure activities is initialized
      });
      console.log("travels so far:", state.travels);
    },
    removeTravel: (state, action) => {
      // action.payload is the travel id
      state.travels = state.travels.filter(
        (travel) => travel.id !== action.payload
      );
    },
    updateTravel: (state, action) => {
      // action.payload should be the updated travel object with all keys
      const index = state.travels.findIndex(
        (travel) => travel.id === action.payload.id
      );
      if (index !== -1) {
        state.travels[index] = action.payload; // update the entire travel object
      }
    },
    addActivity: (state, action) => {
      // action.payload should contain travelId and the full activity object
      const { travelId, activity } = action.payload;
      const travel = state.travels.find((t) => t.id === travelId);
      if (travel) {
        if (!travel.activities) travel.activities = [];
        travel.activities.push(activity);
      }
    },
    removeActivity: (state, action) => {
      // action.payload should contain travelId and the activity id
      const { travelId, activityId } = action.payload;
      const travel = state.travels.find((t) => t.id === travelId);
      if (travel && travel.activities) {
        travel.activities = travel.activities.filter(
          (act) => act.id !== activityId
        );
      }
    },
    updateActivity: (state, action) => {
      // action.payload should contain travelId and the updated activity object
      const { travelId, activity } = action.payload;
      const travel = state.travels.find((t) => t.id === travelId);
      if (travel && travel.activities) {
        const index = travel.activities.findIndex(
          (act) => act.id === activity.id
        );
        if (index !== -1) {
          travel.activities[index] = activity;
        }
      }
    },
    //* modal calling
    openModal: (state, action) => {
      state.modal.isOpen = true;
      console.log("Körs");
      state.modal.modalType = action.payload.modalType;
      state.modal.data = action.payload.data; // store the data related to the modal
      console.log("payload", action.payload.data);
    },

    closeModal: (state) => {
      state.modal.isOpen = false;
      state.modal.modalType = null;
      state.modal.data = null; // clear modal data when closed
    },
  },
});

export const {
  addTravel,
  removeTravel,
  updateTravel,
  addActivity,
  removeActivity,
  updateActivity,
  openModal,
  closeModal,
  openOtherModal,
} = travelSlice.actions;
export default travelSlice.reducer;
