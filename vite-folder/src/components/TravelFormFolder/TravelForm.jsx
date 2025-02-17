import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTravel } from "../../ReducerFolder/travelSlice";
import "./travelForm.css";

const TravelForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    timeOfDeparture: "",
    adventuresEnd: "",
    travellingParty: "",
    methodOfTransportation: "",
  });

  const handleChangeTravel = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTravel = {
      id: Date.now(),
      ...formData,
      activities: [], // initialize with an empty activities array
    };
    dispatch(addTravel(newTravel));
    setFormData({
      name: "",
      country: "",
      timeOfDeparture: "",
      adventuresEnd: "",
      travellingParty: "",
      methodOfTransportation: "",
    });
  };

  return (
    <div className="travel-form-container">
      <h2 className="travel-form-title">Travel Booking Form</h2>
      <form onSubmit={handleSubmit} className="travel-form">
        {/* Country Input */}
        <div className="travel-form-group left">
          <label className="travel-form-label">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChangeTravel}
            className="travel-form-input"
            required
          />
        </div>

        {/* Time of Departure Input */}
        <div className="travel-form-group left">
          <label className="travel-form-label">Time of Departure</label>
          <input
            type="datetime-local"
            name="timeOfDeparture"
            value={formData.timeOfDeparture}
            onChange={handleChangeTravel}
            className="travel-form-input"
            required
          />
        </div>

        {/* Adventures End Input */}
        <div className="travel-form-group left">
          <label className="travel-form-label">Adventures End</label>
          <input
            type="datetime-local"
            name="adventuresEnd"
            value={formData.adventuresEnd}
            onChange={handleChangeTravel}
            className="travel-form-input"
            required
          />
        </div>

        {/* Travelling Party Input */}
        <div className="travel-form-group right">
          <label className="travel-form-label">Travelling Party</label>
          <input
            type="text"
            name="travellingParty"
            value={formData.travellingParty}
            onChange={handleChangeTravel}
            className="travel-form-input"
            required
          />
        </div>

        {/* Method of Transportation Input */}
        <div className="travel-form-group right">
          <label className="travel-form-label">Method of Transportation</label>
          <input
            type="text"
            name="methodOfTransportation"
            value={formData.methodOfTransportation}
            onChange={handleChangeTravel}
            className="travel-form-input"
            required
          />
        </div>

        <button type="submit" className="travel-form-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TravelForm;
