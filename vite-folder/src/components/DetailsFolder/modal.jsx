import React from "react";
import "./modal.css";




const Modal = ({ onClose, onEdit, onRemove }) => {

  const modalType = useSelector((state) => state.travel.modal.modalType);

  // Render the appropriate modal based on modalType
  if (modalType === "editTravel") {
    return <EditTravelModal />;
  } else if (modalType === "activity") {
    return <AddActivityModal />;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Trip Details</h2>
        <div className="modal-body">
          <h3>Activities:</h3>
          <h3>Specific Location:</h3>
          <h3>Date:</h3>
          <h3>Description:</h3>
        </div>
        <div className="modal-actions">
          <button className="edit-button" onClick={onEdit}>Edit</button>
          <button className="remove-button" onClick={onRemove}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
