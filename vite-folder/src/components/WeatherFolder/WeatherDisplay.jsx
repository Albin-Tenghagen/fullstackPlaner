import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./weatherDisplay.css";

const WeatherDisplay = () => {
  const travels = useSelector((state) => state.travel.travels);

  const [weatherData, setWeatherData] = useState([]);

  const sortedTravels = (travels || []).sort(
    (a, b) => new Date(a.timeOfDeparture) - new Date(b.timeOfDeparture)
  );

  const nearestTravels = sortedTravels.slice(0, 4);

  useEffect(() => {
    // Fetch weather for each travel's country
    nearestTravels.forEach((travel) => {
      if (travel.country) {
        fetchWeather(travel.country);
        console.log("Calling FetchWeather in useEffect");
      }
    });
  }, [nearestTravels]); // Ensure this effect runs when nearestTravels changes

  const fetchWeather = async (country) => {
    const apiKey = "da5e1812d2384e5eb3b184225251702";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      const data = await response.json();
      setWeatherData((prevData) => [
        ...prevData,
        {
          country,
          condition: data.current.condition.text,
          feelsLike_c: data.current.feelslike_c,
          humidity: data.current.humidity,
          temp_c: data.current.temp_c,
          uv: data.current.uv,
          wind_kph: data.current.wind_kph,
        },
      ]);
      console.log(`Weather in ${country}:`, data);
    } catch (error) {
      console.error(`Error fetching weather for ${country}:`, error);
    }
  };

  return (
    <div>
      <h2>Travel Weather</h2>
      <ul>
        {nearestTravels.map((travel, index) => (
          <li key={travel.id}>
            <h3>{travel.destination}</h3>
            <p>Country: {travel.country}</p>
            <div>
              {weatherData[index] && (
                <div>
                  <p><strong>Condition:</strong> {weatherData[index].condition}</p>
                  <p><strong>Feels Like:</strong> {weatherData[index].feelsLike_c}°C</p>
                  <p><strong>Humidity:</strong> {weatherData[index].humidity}%</p>
                  <p><strong>Temperature:</strong> {weatherData[index].temp_c}°C</p>
                  <p><strong>UV Index:</strong> {weatherData[index].uv}</p>
                  <p><strong>Wind Speed:</strong> {weatherData[index].wind_kph} kph</p>
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
