import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, updateTravel } from "../../ReducerFolder/travelSlice";
import "./EditTravelModal.css"; // Style it according to your design

const EditTravelModal = () => {
  const dispatch = useDispatch();
  const travel = useSelector((state) => state.travel.modal.data); // Get the selected travel object
  const [formData, setFormData] = useState({
    name: travel?.name || "",
    country: travel?.country || "",
    timeOfDeparture: travel?.timeOfDeparture || "",
    adventuresEnd: travel?.adventuresEnd || "",
    travellingParty: travel?.travellingParty || "",
    methodOfTransportation: travel?.methodOfTransportation || "",
    activities: travel?.activities || [],
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

    // Ensure the correct data is being passed, including the travel id
    dispatch(updateTravel({ ...formData, id: travel.id }));
    handleClose();
  };

  useEffect(() => {
    if (!travel) {
      handleClose(); // If no travel data, close the modal
    }
  }, [travel, dispatch]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Travel Details</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Time of Departure</label>
            <input
              type="datetime-local"
              name="timeOfDeparture"
              value={formData.timeOfDeparture}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Adventures End</label>
            <input
              type="datetime-local"
              name="adventuresEnd"
              value={formData.adventuresEnd}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Travelling Party</label>
            <input
              type="text"
              name="travellingParty"
              value={formData.travellingParty}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Method of Transportation</label>
            <input
              type="text"
              name="methodOfTransportation"
              value={formData.methodOfTransportation}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Save Changes</button>
        </form>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EditTravelModal;
