import TravelItem from "./TravelItem";
// The TravelList that should render a list of the upcoming travels a person has.
//* @param An travel array is expected as a prop to render the travelItems in this section
//*
// src/components/TravelListFolder/TravelList.jsx
import { useSelector } from "react-redux";

const TravelList = () => {
  const travels = useSelector((state) => state.travel.travels);

  return (
    <section className="travelListSection">
      <h3 className="travelListHeader">Coming Travels</h3>
      {travels.length > 0 ? (
        travels.map((travel) => (
          // Make sure that 'travel' is a valid object here.
          <TravelItem key={travel.id} travel={travel} />
        ))
      ) : (
        <p>No travels added yet.</p>
      )}

      {/*     
      {travels.map((travel) => (
        <TravelItem key={travel.id} {...travel} />
      ))} */}
    </section>
  );
};

export default TravelList;
