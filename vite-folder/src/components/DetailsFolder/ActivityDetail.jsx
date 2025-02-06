import React, { useState } from "react";
import Modal from "./modal";

const ActivityDetail = ({ activity, onEdit, onRemove }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    onEdit(activity.id);
    setShowModal(false);
  };

  const handleRemove = () => {
    onRemove(activity.id);
    setShowModal(false);
  };

  return (
    <div>
      <h2>{activity.name}</h2>
      <p>Date: {activity.date}</p>
      <p>Place: {activity.place}</p>
      <button onClick={() => setShowModal(true)}>More Info</button>
      {showModal && (
        <Modal
          onEdit={handleEdit}
          onRemove={handleRemove}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ActivityDetail;
