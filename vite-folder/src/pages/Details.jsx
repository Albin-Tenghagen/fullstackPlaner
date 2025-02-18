import React, { useState } from "react";
import Modal from "../components/DetailsFolder/modal"; // Importera modal-komponenten
import { useParams, Link } from "react-router-dom";
function Details() {
  const { id } = useParams();

  return (
    <>
      <p>Details Page suckaaaas</p>
      <section>
        <h2>Travel Details</h2>
        <p>travelId: {id}</p>
      </section>
    </>
  );
}

export default Details;
