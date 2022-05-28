import { useState, useEffect } from "react";
import WeatherIcon from "../components/WeatherIcon";
import weatherService from "../features/weatherService";

function Forecast({ forecastArr }) {
  const [forecast, getForecast] = useState();
  useEffect(() => {
    if (forecastArr !== undefined) {
      getForecast(
        forecastArr.map((forecast) => {
          return (
            <div className="day-container">
              <span className="alt-header-text">{weatherService.trimDate(forecast.datetime)}</span>
              <div className="icon-container">
                <WeatherIcon iconCode={forecast.weather.code} />
              </div>
              <span className="sky-condition forecast">{forecast.weather.description}</span>
              <span className="forecast-temps">
                {weatherService.roundNumber(forecast.high_temp)}°F / {weatherService.roundNumber(forecast.low_temp)}°F
              </span>
            </div>
          );
        })
      );
    }
  }, [forecastArr]);

  return (
    <section>
      <div className="section-header">
        <span className="section-header-text">Forecast</span>
      </div>
      <div className="forecast-container">
        <div className="forecast">{forecast}</div>
      </div>
    </section>
  );
}

export default Forecast;
