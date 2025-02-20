import { useDispatch } from "react-redux";
import {
  addActivity,
  openModal,
  removeTravel,
  updateTravel,
} from "../../ReducerFolder/travelSlice";

import { Link } from "react-router";
const TravelItem = ({ travel }) => {
  const dispatch = useDispatch();

  return (
    <article className="travelDetail">
      <h3 className="travelDetailHeader">Coming Travel </h3>
      <p className="travelsingularDetail">
        <strong>Destination:</strong> {travel.country}
      </p>
      <p className="travelsingularDetail">
        <strong>Time Of Departure:</strong>{" "}
        {travel.timeOfDeparture.replace("T", " ")}{" "}
      </p>
      <p className="travelsingularDetail">
        <strong>Adventures End: </strong>
        {travel.adventuresEnd.replace("T", " ")}
      </p>
      <strong>Band of merry men: </strong> {travel.travellingParty}
      <p className="travelsingularDetail">
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
          onClick={() =>
            dispatch(openModal({ modalType: "editTravel", data: travel }))
          }
        >
          <img
            className="travelItemIcon"
            src="/icons/edit-light/Feather.png"
            alt="edit icon"
          />
        </button>
      </div>
     
    </article>
  );
};

export default TravelItem;
