import { useState, useEffect } from "react";
import "../TravelFormFolder/travelForm.css"; // Import the CSS file
import "../ActivityFormFolder/ActivityForm";

//!||||||||||||||||||||||||||||||||||||||{  OBS!  }||||||||||||||||||||||||||||||||||||||||||||||||
//* Arbeta helst inte features branchen. De blir lite kaos då! vi har ju skapat branches där vi kan arbeta själva så arbeta i dem istället.
//! Annars blir de massa errors och konflikter som är jobbiga att hantera
//!||||||||||||||||||||||||||||||||||||||{  OBS!  }||||||||||||||||||||||||||||||||||||||||||||||||

function TravelForm({ handleSubmitTravel }) {
  const [formData, setFormData] = useState({
    id: Date.now(),
    country: "",
    timeOfDeparture: "",
    adventuresEnd: "",
    travellingParty: "",
    methodOfTransportation: "",
    activites: [],
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
    }));
  }, []);

  const handleChangeTravel = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function formSubmit(e) {
    e.preventDefault();
    handleSubmitTravel(formData);
  }

  return (
    <div className="travel-form-container">
      <h2 className="travel-form-title">Travel Booking Form</h2>
      <form onSubmit={formSubmit} className="travel-form">
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
            type="text"
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
}

export default TravelForm;
