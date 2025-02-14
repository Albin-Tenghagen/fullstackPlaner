import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTravel } from "../../ReducerFolder/travelSlice";

const TravelForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
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
      destination: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Travel Name"
      />
      <input
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Destination"
      />
      <input
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <button type="submit">Add Travel</button>
    </form>
  );
};

export default TravelForm;
