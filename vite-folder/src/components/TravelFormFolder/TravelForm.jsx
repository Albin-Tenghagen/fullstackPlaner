import { useState, useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { addTravel } from "../../ReducerFolder/travelSlice";
import "./travelForm.css";
import { filterCountries } from "./filterCountries";

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

  const [filteredCountries, setFilteredCountries] = useState([]); // Rename the state to filteredCountries
  const dropdownRef = useRef(null); // Ref to the dropdown container 

  const handleChangeTravel = (e) => {
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
    // dispatch(openModal({ modalType: "activity", data: newTravel.id }));
  };

  return (
    <section className="travel-form-container">
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
          {/* Display filtered countries as a dropdown */}
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
    </section>
  );
};

export default TravelForm;
