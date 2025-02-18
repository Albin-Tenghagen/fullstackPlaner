import { useState } from "react";
import "./weatherSearch.css";

const CountryWeatherSearch = () => {
  const [country, setCountry] = useState(""); // Country search input
  const [searchedCountry, setSearchedCountry] = useState("");
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
      setSearchedCountry(country);
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
      setCountry("");
    }
  };

  const getTemperatureDetails = (temp) => {
    if (temp <= 0) return { className: "cold", text: "Freezing" };
    if (temp <= 15) return { className: "cool", text: "Cool" };
    if (temp <= 25) return { className: "warm", text: "Warm" };
    return { className: "hot", text: "Hot" };
  };

  const { className, text } = weatherData ? getTemperatureDetails(weatherData.temp_c) : { className: "", text: "" };

  return (
    <section className="weather-search-container">
      <h2>Search Weather by Country</h2>
      <section className="searchInputSection">
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <button className="weatherSearchButton" onClick={handleSearch}>Search</button>
      </section>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <section className="weatherStats-container">
        <div className="weatherStats">
          <h3>Weather in {searchedCountry}</h3>
          <p><strong>Temperature:</strong> {weatherData.temp_c}°C</p>
          <p><strong>Feels Like:</strong> {weatherData.feelsLike_c}°C</p>
          <p><strong>Condition:</strong> {weatherData.condition}</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind_kph} kph</p>
          <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
          <p><strong>UV Index:</strong> {weatherData.uv}</p>
        </div>
        <div className={`temperature-box ${className}`}>
          {text}
        </div>
      </section>
      )}
    </section>
  );
};

export default CountryWeatherSearch;
