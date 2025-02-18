import { useDispatch } from "react-redux";
import {
  addActivity,
  openModal,
  removeTravel,
  updateTravel,
} from "../../ReducerFolder/travelSlice";
import ActivityDetail from "../DetailsFolder/ActivityDetail";
import "./travelItem.css";
import { Link } from "react-router";
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
        <strong>Adventures End: </strong>
        {travel.adventuresEnd.replace("T", " ")}
      </p>
      <strong>Band of merry men: </strong> {travel.travellingParty}
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
          <img
            className="travelItemIcon"
            src="/icons/remove-add-light/X.png"
            alt="remove icon"
          />
        </button>
        <button
          className="editButton"
          onClick={() => dispatch(updateTravel(travel.id))}
        >
          <img
            className="travelItemIcon"
            src="/icons/edit-light/Feather.png"
            alt="edit icon"
          />
        </button>
      </div>
      <div>
        <h3>Activities:</h3>
        {travel.activities.length > 0 ? (
          <h4>
            This travel has {travel.activities.length} activity added so far{" "}
          </h4>
        ) : (
          <h4>No activities added yet!</h4>
        )}
      </div>
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
      <Link className="addButton" to={`/details/${travel.id}`}>
        read more
      </Link>
    </article>
  );
};

export default TravelItem;
