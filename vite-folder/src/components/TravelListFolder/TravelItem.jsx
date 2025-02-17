import { useDispatch } from "react-redux";
import { removeTravel } from "../../ReducerFolder/travelSlice";
import ActivityDetail from "../DetailsFolder/ActivityDetail";
import "./travelItem.css";

const TravelItem = ({ travel }) => {
  const dispatch = useDispatch();

  return (
    <article className="travel-item">
      <h3>{travel.name}</h3>
      <p>
        <strong>Destination:</strong> {travel.country}
      </p>
      <p>
        <strong>Time Of Departure:</strong>{" "}
        {travel.timeOfDeparture.replace("T", " ")}{" "}
        <strong>Adventures End:</strong>
        {travel.adventuresEnd.replace("T", " ")}
      </p>
      <p>
        <strong>Band of merry men:</strong> {travel.travellingParty}
      </p>
      <p>
        {" "}
        <strong>Method of Transportation</strong>{" "}
        {travel.methodOfTransportation}
      </p>
      {travel.activities && travel.activities.length > 0 && (
        <div>
          <h4>Activities:</h4>
          <ul>
            {travel.activities.map((activity) => (
              <ActivityDetail
                key={activity.id}
                travelId={travel.id}
                activity={activity}
              />
            ))}
          </ul>
        </div>
      )}
      <button
        className="itemButton"
        onClick={() => dispatch(removeTravel(travel.id))}
      >
        Remove
      </button>
    </article>
  );
};

export default TravelItem;
