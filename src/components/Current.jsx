import { useSelector } from "react-redux";
import WeatherIcon from "./WeatherIcon";

function Current() {
  const weather = useSelector((state) => state.weather);

  const checkForWindGusts = (windGusts) =>
    windGusts === undefined ? "None" : windGusts + " MPH";

  return (
    <>
      <main>
        <div className="section-header">
          <span className="section-header-text">
            {weather.cityName}, {weather.stateCode} {weather.country}
          </span>
        </div>
        <div className="current-weather-container">
          <div className="alt-header-text">Right Now</div>
          <div className="current">
            <WeatherIcon className="weather-icon" iconCode={weather.icon} />

            <div className="current-weather-display">
              <div className="current-temp">{weather.currentTemperature}°F</div>
              <div className="sky-condition">{weather.currentSkies}</div>
              <div className="todays-high-low">
                {weather.todayHigh}°F / {weather.todayLow} °F
              </div>
            </div>
          </div>
        </div>

        <table>
          <caption>Current Conditions</caption>
          <tbody>
            <tr>
              <th scope="row">Wind:</th>
              <td className="condition-text">
                {weather.windDir} {weather.windSpeed}MPH
              </td>
            </tr>
            <tr>
              <th scope="row">Wind Gusts:</th>
              <td id="wind-gusts" className="condition-text">
                {checkForWindGusts(weather.windGusts)}
              </td>
            </tr>
            <tr>
              <th scope="row">Humidity:</th>
              <td id="humidity" className="condition-text">
                {weather.humidity}%
              </td>
            </tr>
            <tr>
              <th scope="row">Feels Like:</th>
              <td id="feels-like" className="condition-text">
                {weather.feelsLike}°F
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default Current;
