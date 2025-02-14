import TravelItem from "./TravelItem";

// The TravelList that should render a list of the upcoming travels a person has.
//* @param An travel array is expected as a prop to render the travelItems in this section
//*

const TravelList = ({ travels, setTravels, onDelete }) => {
  const handleEdit = (updatedTravel, index) => {
    const updatedList = [...travels];
    updatedList[index] = updatedTravel;
    setTravels(updatedList); // Update state in parent (Home.jsx)
  };

  return (
    <div>
      <h2>Travel Activities</h2>
      {travels.length === 0 ? (
        <p>No travel activities added yet.</p>
      ) : (
        travels.map((travel, index) => (
          <TravelItem
            key={index}
            travel={travel}
            onDelete={() => onDelete(index)}
            onEdit={(updatedTravel) => handleEdit(updatedTravel, index)}
          />
        ))
      )}
    </div>
  );
};

export default TravelList;