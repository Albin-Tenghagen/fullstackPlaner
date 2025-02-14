// The travelItem component that renders the details of a single TravelItem
//* @param {Travel} prop - the Travel details passed as a prop
//TODO the number of activites is still static and needs to be altered in such a way that the number of activities is actually displayed and not just a p tag


import React, { useState } from 'react';

const TravelItem = ({ travel, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTravel, setEditedTravel] = useState(travel);

  // Handle input changes
  const handleChange = (e) => {
    setEditedTravel({ ...editedTravel, [e.target.name]: e.target.value });
  };

  // Save changes
  const handleSave = () => {
    onEdit(editedTravel); // Send updated data to parent
    setIsEditing(false);
  };

  return (
    <div className="travel-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            name="destination"
            value={editedTravel.destination}
            onChange={handleChange}
          />
                    <input
            type="text"
            name="adventuresEnd"
            value={editedTravel.adventuresEnd}
            onChange={handleChange}
          />
                    <input
            type="text"
            name="destination"
            value={editedTravel.destination}
            onChange={handleChange}
          />
                    <input
            type="text"
            name="destination"
            value={editedTravel.destination}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={editedTravel.date}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{travel.destination} - {travel.date} - {travel.adventuresEnd} - </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TravelItem;
