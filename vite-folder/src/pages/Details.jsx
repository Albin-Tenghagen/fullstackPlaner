import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TravelDetail from "../components/DetailsFolder/TravelDetail";
import ActivityDetail from "../components/DetailsFolder/ActivityDetail";
function Details() {
  //TODO Make a fallback for when there is no travel id to render from. The url is based on travel id in router. So if there is no id the page will return 404 not found.
  //TODO Fix CSS for this component

  const { id } = useParams();
  const travels = useSelector((state) => state.travel.travels);
  const travel = travels.find((t) => String(t.id) === id);

  return (
    <>
      <p>Details Page suckaaaas</p>
      <main className="mainDetails">
        <h2>Travel Details</h2>
        <p>travel id: {id}</p>
        {travel ? (
          <TravelDetail key={travel.id} travel={travel} />
        ) : (
          <h4>Hejsan hoppsan</h4>
        )}

        <section className="activityDetailsSection">
          <h3>Activites during the trip</h3>
          {travel.activities.length > 0 ? (
            travel.activities.map((activity) => (
              <ActivityDetail key={activity.id} activity={activity} />
            ))
          ) : (
            <h4 className="emptySectionpopup">No travels added yet.</h4>
          )}
        </section>
      </main>
    </>
  );
}

export default Details;
