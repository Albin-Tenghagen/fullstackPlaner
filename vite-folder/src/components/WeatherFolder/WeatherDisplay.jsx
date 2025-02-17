import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./weatherDisplay.css";

const WeatherDisplay = () => {
  const travels = useSelector((state) => state.travel.travels);

  const [weatherData, setWeatherData] = useState({}); // Store weather data by country

  const sortedTravels = (travels || []).sort(
    (a, b) => new Date(a.timeOfDeparture) - new Date(b.timeOfDeparture)
  );

  const nearestTravels = sortedTravels.slice(0, 4);

  useEffect(() => {
    // Fetch weather data for each travel's country only if it hasn't been fetched already
    nearestTravels.forEach((travel) => {
      if (travel.country && !weatherData[travel.country]) {
        fetchWeather(travel.country);
        console.log("Calling FetchWeather in useEffect");
      }
    });
  }, [nearestTravels, weatherData]); // Ensure this effect runs when nearestTravels or weatherData changes

  const fetchWeather = async (country) => {
    const apiKey = "da5e1812d2384e5eb3b184225251702";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      const data = await response.json();
      setWeatherData((prevData) => ({
        ...prevData, // spread the previous weather data
        [country]: { // dynamically add the weather data for the current country
          condition: data.current.condition.text,
          feelsLike_c: data.current.feelslike_c,
          humidity: data.current.humidity,
          temp_c: data.current.temp_c,
          uv: data.current.uv,
          wind_kph: data.current.wind_kph,
        },
      }));
      console.log(`Weather in ${country}:`, data);
    } catch (error) {
      console.error(`Error fetching weather for ${country}:`, error);
    }
  };

  return (
    <div>
      <h2>Travel Weather</h2>
      <ul className="weatherList" >
        {nearestTravels.map((travel) => (
          <li key={travel.id}>
            <h3>{travel.destination}</h3>
            <p>Country: {travel.country}</p>
            <div>
              {weatherData[travel.country] && (
                <div>
                  <p><strong>Condition:</strong> {weatherData[travel.country].condition}</p>
                  <p><strong>Feels Like:</strong> {weatherData[travel.country].feelsLike_c}°C</p>
                  <p><strong>Humidity:</strong> {weatherData[travel.country].humidity}%</p>
                  <p><strong>Temperature:</strong> {weatherData[travel.country].temp_c}°C</p>
                  <p><strong>UV Index:</strong> {weatherData[travel.country].uv}</p>
                  <p><strong>Wind Speed:</strong> {weatherData[travel.country].wind_kph} kph</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDisplay;
