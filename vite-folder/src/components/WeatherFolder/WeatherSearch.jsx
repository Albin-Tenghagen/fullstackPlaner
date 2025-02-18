import { useState } from "react";
import "./weatherSearch.css";

const CountryWeatherSearch = () => {
  const [country, setCountry] = useState(""); // Country search input
  const [weatherData, setWeatherData] = useState(null); // Weather data for the searched country
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message for failed fetches

  const fetchWeather = async (country) => {
    const apiKey = "da5e1812d2384e5eb3b184225251702";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}&aqi=no`;

    setLoading(true); // Start loading
    setError(""); // Clear any previous errors
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      const data = await response.json();
      setWeatherData({
        condition: data.current.condition.text,
        feelsLike_c: data.current.feelslike_c,
        humidity: data.current.humidity,
        temp_c: data.current.temp_c,
        uv: data.current.uv,
        wind_kph: data.current.wind_kph,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Failed to fetch weather data");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (country.trim()) {
      fetchWeather(country);
    }
  };

  return (
    <div className="weather-search-container">
      <h2>Search Weather by Country</h2>
      <input
        type="text"
        placeholder="Enter country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <div>
          <h3>Weather in {country}</h3>
          <p><strong>Temperature:</strong> {weatherData.temp_c}°C</p>
          <p><strong>Feels Like:</strong> {weatherData.feelsLike_c}°C</p>
          <p><strong>Condition:</strong> {weatherData.condition}</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind_kph} kph</p>
          <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
          <p><strong>UV Index:</strong> {weatherData.uv}</p>
        </div>
      )}
    </div>
  );
};

export default CountryWeatherSearch;
