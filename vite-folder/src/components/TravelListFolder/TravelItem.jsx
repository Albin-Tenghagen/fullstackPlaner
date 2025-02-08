// The travelItem component that renders the details of a single TravelItem
//* @param {Travel} prop - the Travel details passed as a prop

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
      <p>{timeOfDeparture}</p>
      <p>{adventuresEnd}</p>
      <p>{travellingParty}</p>
      <p>{methodOfTransportation}</p>
      <p>Number of activities</p>
    </article>
  );
};
export default TravelItem;
