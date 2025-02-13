import WeatherDisplay from "../components/WeatherFolder/WeatherDisplay";
import WeatherSearch from "../components/WeatherFolder/WeatherSearch";

function Weather() {

  const sortedTravelArray = (travelArray || []).sort(
    (a, b) => new Date(a.timeOfDeparture) - new Date(b.timeOfDeparture)
  );

  const nearestTravels = sortedTravelArray.slice(0, 4);

  return (
    <>
      <WeatherDisplay nearestTravels={nearestTravels} />
      <WeatherSearch />
    </>
  );
}

export default Weather;
