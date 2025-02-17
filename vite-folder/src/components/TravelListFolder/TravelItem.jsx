import { useDispatch } from "react-redux";
import {
  addActivity,
  removeTravel,
  updateTravel,
} from "../../ReducerFolder/travelSlice";
import ActivityDetail from "../DetailsFolder/ActivityDetail";
import "./travelItem.css";

const TravelItem = ({ travel }) => {
  const dispatch = useDispatch();

  return (
    <article className="travel-item">
      <h3 className="travel-itemHeader">Coming Travel </h3>
      <p>
        <strong>Destination:</strong> {travel.country}
      </p>
      <p>
        <strong>Time Of Departure:</strong>{" "}
        {travel.timeOfDeparture.replace("T", " ")}{" "}
      </p>
      <p>
        <p>
          <strong>Adventures End: </strong>
          {travel.adventuresEnd.replace("T", " ")}
        </p>
        <strong>Band of merry men:</strong> {travel.travellingParty}
      </p>
      <p>
        {" "}
        <strong>Method of Transportation: </strong>{" "}
        {travel.methodOfTransportation}
      </p>
      <div className="buttonhouse">
        <button
          className="removeButton"
          onClick={() => dispatch(removeTravel(travel.id))}
        >
          Remove
        </button>
        <button
          className="editButton"
          onClick={() => dispatch(updateTravel(travel.id))}
        >
          Edit
        </button>
      </div>
      <div>
        <h3>Activities:</h3>
        {travel.activities.length > 0 ? (
          <ul>
            {travel.activities.map((activity) => (
              <ActivityDetail
                key={activity.id}
                travelId={travel.id}
                activity={activity}
              />
            ))}
          </ul>
        ) : (
          <h4>No activities added yet!</h4>
        )}
      </div>
      <button
        className="addButton"
        onClick={() => dispatch(addActivity(travel.id))}
      >
        +
      </button>
    </article>
  );
};

export default TravelItem;
