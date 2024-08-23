import React, { useState } from 'react';
import'./weatherForm.css';

function WeatherForm({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="weather-card">
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="weather-input"
    />
    <button type="submit" className="weather-button">
      Get Weather
    </button>
  </form>
);
}

export default WeatherForm;
