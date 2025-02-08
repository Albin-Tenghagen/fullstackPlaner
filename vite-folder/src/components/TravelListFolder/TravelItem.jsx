// The travelItem component that renders the details of a single TravelItem
//* @param {Travel} prop - the Travel details passed as a prop
//TODO the number of activites is still static and needs to be altered in such a way that the number of activities is actually displayed and not just a p tag
const TravelItem = ({
  country,
  timeOfDeparture,
  adventuresEnd,
  travellingParty,
  methodOfTransportation,
}) => {
  return (
    <article className="TravelItem">
      <h4>{country}</h4>
      <p>{timeOfDeparture.replace("T", " ")}</p>
      <p>{adventuresEnd}</p>
      <p>{travellingParty}</p>
      <p>{methodOfTransportation}</p>
      <p>Number of activities</p>
    </article>
  );
};
export default TravelItem;
