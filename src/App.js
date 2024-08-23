import React, { useState } from 'react';
import axios from 'axios';
import WeatherForm from './components/weatherForm';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [units, setUnits] = useState('metric');

  const apiKey = '3d3d5b97d75a4ad356e654e328fd8c11';

  const fetchWeather = async (city) => {
    try {
      console.log(`Fetching weather for ${city} in ${units} units`);
      
      // Correct URL construction for fetching current weather
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`
      );
      console.log('Current weather data:', weatherResponse.data);
      setWeatherData(weatherResponse.data);

      // Correct URL construction for fetching the 5-day forecast
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`
      );
      console.log('Forecast data:', forecastResponse.data);
      setForecastData(forecastResponse.data.list.slice(0, 5));
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('City not found. Please enter a valid city name.');
      } else {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching the weather data. Please try again.');
      }
    }
  };

  const toggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="app-container">
    <center>
      <h1>Weather Forecast Dashboard</h1>
      <WeatherForm onSearch={fetchWeather} />
      <button className="toggle-button" onClick={toggleUnits}>
        Toggle to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </center>
    <div className="weather-content">
      <CurrentWeather weatherData={weatherData} />
      <Forecast forecastData={forecastData} />
    </div>
  </div>
);
}

export default App;
