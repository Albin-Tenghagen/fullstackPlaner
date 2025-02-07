// The TravelList that should render a list of the upcoming travels a person has.
//* @param An travel array is expected as a prop to render the travelItems in this section

import TravelItem from "./TravelItem";
const TravelList = () => {
  return (
    <section>
      <h3>Coming Travels</h3>
      {/* {TravelArray.map((Travel) => (
        <TravelItem />
      ))} */}
      <TravelItem />
    </section>
  );
};
export default TravelList;
