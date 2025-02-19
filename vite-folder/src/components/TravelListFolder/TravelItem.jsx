import React from "react";
import { useDispatch } from "react-redux";
import { openModal, removeTravel } from "../../ReducerFolder/travelSlice";
import ActivityDetail from "../DetailsFolder/ActivityDetail";
import "./travelItem.css";
import { Link } from "react-router";



const TravelItem = React.memo(({ travel }) => {
  const dispatch = useDispatch();
  const activities = travel.activities || [];

  return (
    <article className="travel-item">
      <h3 className="travel-itemHeader">Coming Travel</h3>
      <p>
        <strong>Destination:</strong> {travel.country}
      </p>
      <p>
        <strong>Time Of Departure:</strong> {travel.timeOfDeparture.replace("T", " ")}
      </p>
      <p>
        <strong>Adventures End: </strong>
        {travel.adventuresEnd.replace("T", " ")}
      </p>
      <strong>Band of merry men: </strong> {travel.travellingParty}
      <p>
        <strong>Method of Transportation: </strong> {travel.methodOfTransportation}
      </p>
      <div className="buttonhouse">
        <button className="removeButton" onClick={() => dispatch(removeTravel(travel.id))}>
          <img className="travelItemIcon" src="/icons/remove-add-light/X.png" alt="remove icon" />
        </button>

        <button
          className="editButton"
          onClick={() => dispatch(openModal({ modalType: "editTravel", data: travel }))}
        >
          <img className="travelItemIcon" src="/icons/edit-light/Feather.png" alt="edit icon" />
        </button>
      </div>

      <div>
        <h3>Activities:</h3>
        {activities.length > 0 ? (
          <ul>
            {activities.map((activity) => (
              <ActivityDetail key={activity.id} travelId={travel.id} activity={activity} />
            ))}
          </ul>
        ) : (
          <h4>No activities added yet!</h4>
        )}
      </div>

      <button
        className="addButton"
        onClick={() => dispatch(openModal({ modalType: "activity", data: travel.id }))}
      >
        <img className="travelItemIcon" src="/icons/remove-add-light/Plus.png" alt="add icon" />
      </button>
      <Link className="addButton" to={`/details/${travel.id}`}>
        read more
      </Link>
    </article>
  );
});

export default TravelItem;
