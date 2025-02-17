import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, addActivity } from "../../ReducerFolder/travelSlice";
import "./modal.css"; // Style it according to your design

const AddActivityModal = () => {
  const dispatch = useDispatch();
  const travelId = useSelector((state) => state.travel.modal.data); // Get the current travel id
  const [activity, setActivity] = useState("");

  // Close the modal
  const handleClose = () => {
    dispatch(closeModal());
  };

  // Handle input changes
  const handleChange = (e) => {
    setActivity(e.target.value);
  };

  // Handle form submit to add activity
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      id: Date.now(), // A unique id for the activity
      name: activity,
    };
    dispatch(addActivity({ travelId, activity: newActivity }));
    setActivity(""); // Reset input
    handleClose(); // Close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Activity</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Activity Name</label>
            <input
              type="text"
              value={activity}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Add Activity</button>
        </form>
        <button className="close-button" onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default AddActivityModal;
