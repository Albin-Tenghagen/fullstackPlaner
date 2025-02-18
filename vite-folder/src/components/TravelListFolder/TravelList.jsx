import TravelItem from "./TravelItem";
// The TravelList that should render a list of the upcoming travels a person has.
//* @param An travel array is expected as a prop to render the travelItems in this section
//*
// src/components/TravelListFolder/TravelList.jsx
import { useSelector } from "react-redux";
import "./travelList.css";

const TravelList = () => {
  const travels = useSelector((state) => state.travel.travels);
  console.log(travels.map((travel) => travel.id));
  return (
    <section className="travelListSection">
      <h3 className="travelListHeader">Coming Travels</h3>
      {travels.length > 0 ? (
        travels.map((travel) => (
          // Make sure that 'travel' is a valid object here.
          <TravelItem key={travel.id} travel={travel} />
        ))
      ) : (
        <h4 className="emptySectionpopup">No travels added yet.</h4>
      )}

      {/*     
      {travels.map((travel) => (
        <TravelItem key={travel.id} {...travel} />
      ))} */}
    </section>
  );
};

export default TravelList;
