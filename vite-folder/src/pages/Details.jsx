import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../components/DetailsFolder/modal";

function Details() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTravel, setSelectedTravel] = useState(null);
  const travels = useSelector((state) => state.travel?.travels || []);

  // useffect to see changes in redux and update component
  useEffect(() => {
    console.log("Travel data updated:", travels);
  }, [travels]);

  const handleShowModal = (travel) => {
    setSelectedTravel(travel);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTravel(null);
  };

  return (
    <>
      <h2>Details Page</h2>

      {travels.length === 0 ? (
        <p>Inga resor sparade ännu.</p>
      ) : (
        <ul>
          {travels.map((travel, index) => {
            console.log("Travel item:", travel);

            return (
              <li key={index}>
                <strong>Destination:</strong> {travel.country} <br />
                <strong>Traveling Party:</strong> {travel.travellingParty} <br />
                <strong>Time of Departure:</strong> {travel.timeOfDeparture.replace("T", " ")} <br />
                <strong>Adventure End:</strong> {travel.adventuresEnd.replace("T", " ")} <br />
                <strong>Method of Transportation:</strong> {travel.methodOfTransportation} <br />
                <button onClick={() => handleShowModal(travel)}>Mer Info</button>
              </li>
            );
          })}
        </ul>
      )}

      {showModal && selectedTravel && (
        <Modal
          onClose={handleCloseModal}
          travel={selectedTravel}
        />
      )}
    </>
  );
}

export default Details;
