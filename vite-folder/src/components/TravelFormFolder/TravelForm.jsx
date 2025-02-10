import { useState, useEffect } from "react";
import "../TravelFormFolder/travelForm.css"; // Import the CSS file
import "../ActivityFormFolder/ActivityForm";

//!||||||||||||||||||||||||||||||||||||||{  OBS!  }||||||||||||||||||||||||||||||||||||||||||||||||
//* Arbeta helst inte features branchen. De blir lite kaos då! vi har ju skapat branches där vi kan arbeta själva så arbeta i dem istället.
//! Annars blir de massa errors och konflikter som är jobbiga att hantera
//!||||||||||||||||||||||||||||||||||||||{  OBS!  }||||||||||||||||||||||||||||||||||||||||||||||||

function TravelForm({ handleSubmitTravel }) {
  const [formData, setFormData] = useState({
    id: "", // Unique ID field
    country: "",
    timeOfDeparture: "",
    adventuresEnd: "",
    travellingParty: "",
    methodOfTransportation: "",
    activites: [],
  });

  useEffect(() => {
    // Generate a unique ID when the component mounts
    setFormData((prevData) => ({
      ...prevData,
      id: Date.now().toString(),
    }));
  }, []);

  const fieldLabels = {
    country: "Country",
    timeOfDeparture: "Time of Departure",
    adventuresEnd: "Adventures End",
    travellingParty: "Travelling Party",
    methodOfTransportation: "Method of Transportation",
  };

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
        {/* Hidden ID field */}
        <input type="hidden" name="id" value={formData.id} />

        {Object.keys(formData).map(
          (key, index) =>
            key !== "id" && ( // Exclude the ID field from visible inputs
              <div
                key={key}
                className={`travel-form-group ${
                  index < 3 ? "left" : "right" // Assign left class for the first 3,  right for the rest
                }`}
              >
                <label className="travel-form-label">{fieldLabels[key]}</label>

                {key === "timeOfDeparture" ? (
                  <input
                    type="datetime-local"
                    name={key}
                    value={formData[key]}
                    onChange={handleChangeTravel}
                    className="travel-form-input"
                    required
                  />
                ) : (
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChangeTravel}
                    className="travel-form-input"
                    required
                  />
                )}
              </div>
            )
        )}
        <button type="submit" className="travel-form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TravelForm;
