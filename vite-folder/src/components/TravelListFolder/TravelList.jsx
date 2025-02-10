import TravelItem from "./TravelItem";
// The TravelList that should render a list of the upcoming travels a person has.
//* @param An travel array is expected as a prop to render the travelItems in this section
//*
const TravelList = ({ travelArray }) => {
  return (
    <section className="travelList">
      <h3>Coming Travels</h3>
      {travelArray.map((travel, index) => (
        <TravelItem key={index} {...travel} />
      ))}
    </section>
  );
};
export default TravelList;
