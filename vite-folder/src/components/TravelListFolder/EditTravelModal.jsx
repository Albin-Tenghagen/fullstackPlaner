import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, updateTravel } from "../../ReducerFolder/travelSlice";
import { filterCountries } from "../TravelFormFolder/filterCountries"
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

  const [filteredCountries, setFilteredCountries] = useState([]); // Rename the state to filteredCountries
  const dropdownRef = useRef(null); // Ref to the dropdown container 

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,

      [name]: value,
    });

    if (name === "country") {
      const results = filterCountries(value);
      setFilteredCountries(results);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setFilteredCountries([]); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

            {filteredCountries.length > 0 && (
              <ul ref={dropdownRef} className="filtered-countries-list">
                {filteredCountries.map((country, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setFormData({
                        ...formData,
                        country: country.name,
                      });
                      setFilteredCountries([]);
                    }}
                  >
                    {country.name}
                  </li>
                ))}
              </ul>
            )}
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


        </form>

        <div className="buttonDiv">
        <button type="submit">Save Changes</button>    
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default EditTravelModal;
