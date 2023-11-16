import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '8d905fe9b51aecf60d57ca26164b51bc';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setWeatherData(null);
      setError('City not found. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherData();
  };

  return (
    <div className="weather-app">
      <h1>Weather Forecast App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
