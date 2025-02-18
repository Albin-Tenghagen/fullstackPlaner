import React, { useState } from "react";
import Modal from "../components/DetailsFolder/modal"; // Importera modal-komponenten
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TravelItem from "../components/TravelListFolder/TravelItem";
function Details() {
  const { id } = useParams();
  const travels = useSelector((state) => state.travel.travels);
  const travel = travels.find((travel) => String(travel.id) === id);

  return (
    <>
      <p>Details Page suckaaaas</p>
      <main>
        <h2>Travel Details</h2>
        <p>travel id: {id}</p>
        {travel ? (
          <TravelItem key={travel.id} travel={travel} />
        ) : (
          <h4>Hejsan hoppsan</h4>
        )}
      </main>
    </>
  );
}

export default Details;
