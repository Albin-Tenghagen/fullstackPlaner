import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActivity, closeModal } from "../../ReducerFolder/travelSlice";
import "./activityForm.css";

function EditActivityFormModal() {
  const dispatch = useDispatch();
  // const { isOpen, modalType, data } = useSelector(
  //     (state) => state.travel.modal
  //   );

  const activity = useSelector((state) => state.travel.modal?.data);
  // const travel = useSelector((state) => state.travels.modal.data);

  const [formData, setFormData] = useState({
    activity: activity?.name || "",
    specificLocation: activity?.specificLocation || "",
    date: activity?.date || "",
    description: activity?.description || "",
    cost: activity?.cost || "",
  });

  // Close the modal
  const handleClose = () => {
    dispatch(closeModal());
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  // Submit the form to update the travel
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateActivity({
        travelId: activity.travelId, // Ensure this exists
        activity: { ...formData, id: activity.id }, // Wrap form data in `activity`
      })
    );

    dispatch(closeModal());
  };

  return (
    <section className="aFModal">
      <div className="aFModal-backdrop"></div>
      <div className="aFModal-content">
        <h2 className="aFModal-title">Edit in activity details</h2>
        <button
          className="aFModal-closeButton"
          onClick={() => dispatch(closeModal())}
        >
          X
        </button>
        <form className="activityForm" onSubmit={handleSubmit}>
          {/* <input
            name="activity"
            type="text"
            value={formData.activity}
            onChange={handleChange}
            placeholder="Enter activity..."
            required
          /> */}
          <input
            name="specificLocation"
            type="text"
            value={formData.specificLocation}
            onChange={handleChange}
            placeholder="Specific location..."
            required
          />
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            required
          />
          <input
            name="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
            placeholder="Short description"
            required
          />
          <input
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            type="text"
            placeholder="Enter cost $..."
            required
          />

          <button className="aFModal-addButton" type="submit">
            Add
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className="AfModal-addLaterButton"
          >
            Add later
          </button>
        </form>
      </div>
    </section>
  );
}
export default EditActivityFormModal;
