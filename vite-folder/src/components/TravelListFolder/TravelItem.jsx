// The travelItem component that renders the details of a single TravelItem
//* @param {Travel} prop - the Travel details passed as a prop
//TODO the number of activites is still static and needs to be altered in such a way that the number of activities is actually displayed and not just a p tag


const TravelItem = function travelItem ({
  country,
  timeOfDeparture,
  adventuresEnd,
  travellingParty,
  methodOfTransportation,
  activities,
  addActivity,
  onEdit,
  onRemove
}) {

function handleAddButton (){
  addActivity()

}

  return (
    <article className="TravelItem">
      <h4>{country}</h4>
      <p>{timeOfDeparture.replace("T", " ")}</p>
      <p>{adventuresEnd}</p>
      <p>{travellingParty}</p>
      <p>{methodOfTransportation}</p>
      <p>Activites to look forward to!</p>
      <p>activites amount: {activities.length}</p>
      <div className="travelItem-actions">
      <button className="add-button" onClick={handleAddButton}>Add Activity</button>



      <button className="edit-button" onClick={onEdit}>Edit Activity</button>
      <button className="remove-button" onClick={onRemove}>Remove Activity</button>
      </div>
    </article>
  );
};


TravelItem.defaultProps = {
  onEdit: () => console.log("Edit button clicked"),
  onRemove: () => console.log("Remove button clicked"),
};
export default TravelItem;
