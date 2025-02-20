import { useDispatch } from "react-redux";
import { openModal, removeTravel } from "../../ReducerFolder/travelSlice";
import "./TravelDetail.css";
import { Link } from "react-router";
const TravelItem = ({ travel }) => {
  const dispatch = useDispatch();

  return (
    <>
    <section className="travel-detail">

     
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
      </article>
    </section>
    </>
  );
};

export default TravelItem;
