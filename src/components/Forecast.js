import React from 'react';
import './Forecast.css';

function Forecast({ forecastData }) {
  if (!forecastData) return null;

  return (
    <div>
     <center> <h2 >5-Day Forecast</h2></center>
      <div>
        {forecastData.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{day.dt_txt}</p>
            <p>Avg Temp: {day.main.temp}°</p>
            <p>Description: {day.weather[0].description}</p>
            <img
              src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
