import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TravelDetail from "../components/DetailsFolder/TravelDetail";
import ActivityDetail from "../components/DetailsFolder/ActivityDetail";
import "./details.css";
function Details() {
  //TODO Make a fallback for when there is no travel id to render from. The url is based on travel id in router. So if there is no id the page will return 404 not found.
  //TODO Fix CSS for this component
  const dispatch = useDispatch();
  const { id } = useParams();
  const travels = useSelector((state) => state.travel.travels);
  const travel = travels.find((t) => String(t.id) === id);
  return (
    <>
      <p>Details Page suckaaaas</p>
      <main className="mainDetails">
        <section className="travelDetailsSection">
          <h2>Travel Details</h2>
          <p>travel id: {id}</p>
          {travel !== undefined ? (
            <TravelDetail key={travel.id} travel={travel} />
          ) : (
            <h4>Hejsan hoppsan</h4>
          )}
        </section>
        <section className="activityDetailsSection">
          <article className="activityHeading">
            <h3 className="activityDetailsHeader">Activites during the trip</h3>
            <button
              className="addButton"
              onClick={() =>
                dispatch(openModal({ modalType: "activity", data: travel.id }))
              }
            >
              <img
                className="travelItemIcon"
                src="/icons/remove-add-light/Plus.png"
                alt="add icon"
              />
            </button>
          </article>
          {travel && travel.activities ? (
            travel.activities.map((activity) => (
              <ActivityDetail key={activity.id} activity={activity} />
            ))
          ) : (
            <h4 className="emptySectionpopup">No activities added yet.</h4>
          )}
        </section>
      </main>
    </>
  );
}
export default Details;
