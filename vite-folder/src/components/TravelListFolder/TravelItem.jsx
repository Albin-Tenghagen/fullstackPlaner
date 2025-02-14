// The travelItem component that renders the details of a single TravelItem
//* @param {Travel} prop - the Travel details passed as a prop
const TravelItem = ({
  country,
  timeOfDeparture,
  adventuresEnd,
  travellingParty,
  methodOfTransportation,
  activities,
}) => {
  function OpenModal() {}
  return (
    <article className="TravelItem">
      <h4 className="travelItemHeader">{country}</h4>
      <p className="travelItemP">{timeOfDeparture.replace("T", " ")}</p>
      <p className="travelItemP">{adventuresEnd}</p>
      <p className="travelItemP">{travellingParty}</p>
      <p className="travelItemP">{methodOfTransportation}</p>
      <p className="travelItemP">Activites to look forward to!</p>
      <p className="travelItemP">activites amount: {activities.length}</p>
      <button>Add Activity</button>
    </article>
  );
};
export default TravelItem;
