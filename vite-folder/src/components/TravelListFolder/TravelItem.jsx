import { useDispatch } from "react-redux";
import { removeTravel } from "../../ReducerFolder/travelSlice";
import ActivityDetail from "../DetailsFolder/ActivityDetail";

const TravelItem = ({ travel }) => {
  const dispatch = useDispatch();

  return (
    <div className="travel-item">
      <h3>{travel.name}</h3>
      <p>
        <strong>Destination:</strong> {travel.destination}
      </p>
      <p>
        <strong>Dates:</strong> {travel.startDate} - {travel.endDate}
      </p>
      <p>
        <strong>Description:</strong> {travel.description}
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
      <button onClick={() => dispatch(removeTravel(travel.id))}>
        Remove Travel
      </button>
    </div>
  );
};

export default TravelItem;
