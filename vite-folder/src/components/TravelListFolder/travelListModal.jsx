import { useSelector, useDispatch } from "react-redux";
import { closeModal, editTravel } from "../../ReducerFolder/travelSlice"; // Adjust path as needed
import { useState, useEffect } from "react";


const TravelModal = () => {
    const dispatch = useDispatch();
    const { isOpen, modalType, data } = useSelector((state) => state.travel.modal);

    if (!isOpen || modalType !== "editTravel") return null; // ✅ Only show this modal for editing
        const [formData, setFormData] = useState(data || {});
  
    // Sync form data when modal opens
    useEffect(() => {
      if (data) {
        setFormData(data);
      }
    }, [data]);
  
    if (!isOpen || modalType !== "editTravel") return null; // Only show modal if editing travel
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      dispatch(editTravel({ travelId: data.id, updatedFields: formData }));
      dispatch(closeModal()); // Close modal after editing
    };
  
    return (
      <div className="modal">
        <h2>Edit Travel</h2>
        <input name="destination" value={formData.destination || ""} onChange={handleChange} />
        <input name="date" type="date" value={formData.date || ""} onChange={handleChange} />
        <button onClick={handleSubmit}>Save Changes</button>
        <button onClick={() => dispatch(closeModal())}>Cancel</button>
      </div>
    );
  };
  
  export default TravelModal;