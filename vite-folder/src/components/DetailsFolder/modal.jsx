import React from "react";
import "./modal.css";

const Modal = ({ onClose, travel }) => {
  if (!travel) {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>X</button>
          <h2>Activities</h2>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Activities</h2>

        {travel.activities && travel.activities.length > 0 ? (
          <ul>
            {travel.activities.map((activity, index) => (
              <li key={index}>
                <strong>Activity:</strong> {activity.activity} <br />
                <strong>Location:</strong> {activity.specificLocation} <br />
                <strong>Date:</strong> {activity.date} <br />
                <strong>Description:</strong> {activity.description} <br />
                <strong>Cost:</strong> ${activity.cost} <br />
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No activities added yet.</p>
        )}
      </div>

      <div className="modal-actions">
        <button className="edit-button">Edit</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
};

export default Modal;