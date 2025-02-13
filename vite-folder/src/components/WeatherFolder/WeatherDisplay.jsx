import TravelItem from "../TravelListFolder/TravelItem"

function WeatherDisplay({ nearestTravels }) {
    return (
      <div className="nearestTravelDisplay">
        <h2>Nearest Travels</h2>
        {nearestTravels.length > 0 ? (
          nearestTravels.map((travel) => (
            <TravelItem key={travel.travelId} {...travel} />
          ))
        ) : (
          <p>No upcoming travels available.</p>
        )}
      </div>
    );
  }

export default WeatherDisplay;