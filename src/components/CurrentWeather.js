import React from 'react';
import './CurrentWeather.css';

function CurrentWeather({ weatherData }) {
  if (!weatherData) return null;

  const { temp, temp_min, temp_max, humidity } = weatherData.main;
  const { speed, deg } = weatherData.wind;
  const { description, icon } = weatherData.weather[0];

  return (
    <div className="weather-card">
    <div className="weather-header">
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
      <h2>Current Weather</h2>
    </div>
    <div className="weather-info">
      <p><strong>Temperature:</strong> {temp}°</p>
      <p><strong>Min Temp:</strong> {temp_min}° | <strong>Max Temp:</strong> {temp_max}°</p>
      <p><strong>Humidity:</strong> {humidity}%</p>
      <p><strong>Wind:</strong> {speed} m/s at {deg}°</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  </div>
);
}

export default CurrentWeather;
