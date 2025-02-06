import React, { useState } from "react";
import Modal from "../components/DetailsFolder/modal"; // Importera modal-komponenten

function Details() {
  const [showModal, setShowModal] = useState(false); // Hantera modalens synlighet

  const handleShowModal = () => {
    setShowModal(true); // Visa modalen
  };

  const handleCloseModal = () => {
    setShowModal(false); // Stäng modalen
  };

  return (
    <>
      <p>Details Page suckaaaas</p>

      {/* Knapp för att visa modal */}
      <button onClick={handleShowModal}>Mer Info</button>

      {/* Visa modalen när showModal är true */}
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
}

export default Details;
