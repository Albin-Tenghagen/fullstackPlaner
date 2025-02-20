import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./weatherDisplay.css";

const WeatherDisplay = () => {
  const travels = useSelector((state) => state.travel.travels);

  const [weatherData, setWeatherData] = useState({}); // Store weather data by country
  const [errorMessages, setErrorMessages] = useState({}); // Store error messages for countries

  const sortedTravels = [...(travels || [])].sort(
    (a, b) => new Date(a.timeOfDeparture) - new Date(b.timeOfDeparture)
  );

  const nearestTravels = sortedTravels.slice(0, 4);

  useEffect(() => {
    // Fetch weather data for each travel's country only if it hasn't been fetched already
    nearestTravels.forEach((travel) => {
      if (travel.country && !weatherData[travel.country] && !errorMessages[travel.country]) {
        fetchWeather(travel.country);
        console.log("Calling FetchWeather in useEffect");
      }
    });
  }, [nearestTravels, weatherData, errorMessages]); // Ensure this effect runs when nearestTravels, weatherData, or errorMessages changes

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
      setErrorMessages((prevMessages) => ({
        ...prevMessages,
        [country]: "", // Clear any error message if data is fetched successfully
      }));
      console.log(`Weather in ${country}:`, data);
    } catch (error) {
      console.error(`Error fetching weather for ${country}:`, error);
      setErrorMessages((prevMessages) => ({
        ...prevMessages,
        [country]: "Weather data not available for this location, or incorrect spelling.",
      }));
      setWeatherData((prevData) => ({
        ...prevData,
        [country]: null, // Clear weather data for the country if fetch fails
      }));
    }
  };

  const getTemperatureDetails = (temp) => {
    if (temp <= 0) return { className: "cold", text: "Freezing" };
    if (temp <= 15) return { className: "cool", text: "Cool" };
    if (temp <= 25) return { className: "warm", text: "Warm" };
    return { className: "hot", text: "Hot" };
  };

  return (
    <section className="travelWeather-container">
      <h2>Your nearest travels!</h2>
      <ul className="weatherList">
        {nearestTravels.map((travel) => {
          const weather = weatherData[travel.country];
          const errorMessage = errorMessages[travel.country];
          const { className, text } = weather
            ? getTemperatureDetails(weather.temp_c)
            : { className: "", text: "" };

          return (
            <li key={travel.id}>
              <div className="cardTitle">
                <h3> Weather in {travel.country.charAt(0).toUpperCase() + travel.country.slice(1)}</h3>
                <div id="tempBoxStyle" className={`temperature-box ${className}`}>
                  {text}
                </div>
              </div>
              <div>
                {errorMessage ? (
                  <p>{errorMessage}</p> // Display error message
                ) : weather ? (
                  <div>
                    <p><strong>Temperature:</strong> {weather.temp_c}°C</p>
                    <p><strong>Feels Like:</strong> {weather.feelsLike_c}°C</p>
                    <p><strong>Condition:</strong> {weather.condition}</p>
                    <p><strong>Wind Speed:</strong> {weather.wind_kph} kph</p>
                    <p><strong>Humidity:</strong> {weather.humidity}%</p>
                    <p><strong>UV Index:</strong> {weather.uv}</p>
                  </div>
                ) : (
                  <p>Loading weather data...</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WeatherDisplay;
