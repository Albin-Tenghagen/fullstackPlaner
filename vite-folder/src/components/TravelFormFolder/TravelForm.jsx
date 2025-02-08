import { useState } from "react";
import "../TravelFormFolder/travelForm.css"; // Import the CSS file

function TravelForm() {
  const [travelArray, setTravelArray] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    timeOfDeparture: "",
    adventuresEnd: "",
    travellingParty: "",
    methodOfTransportation: "",
  });

  const fieldLabels = {
    country: "Country",
    timeOfDeparture: "Time of Departure",
    adventuresEnd: "Adventures End",
    travellingParty: "Travelling Party",
    methodOfTransportation: "Method of Transportation",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTravelArray({ travelArray, formData });
    console.log("Form Submitted:", formData);
    console.log("travelArray", travelArray);
  };

  return (
    <div className="travel-form-container">
      <h2 className="travel-form-title">Travel Booking Form</h2>
      <form onSubmit={handleSubmit} className="travel-form">
        {Object.keys(formData).map((key, index) => (
          <div
            key={key}
            className={`travel-form-group ${
              index < 3 ? "left" : "right" // Assign left class for the first 3, right for the rest
            }`}
          >
            <label className="travel-form-label">{fieldLabels[key]}</label>

            {key === "timeOfDeparture" ? (
              <input
                type="datetime-local"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="travel-form-input"
                required
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="travel-form-input"
                required
              />
            )}
          </div>
        ))}
        <button type="submit" className="travel-form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TravelForm;
