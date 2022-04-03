import "../stylesheets/CurrentWeather.css";

function CurrentWeather() {
  return (
    <>
      <section>
        <div className="section-header">
          <span className="section-header-text">Hermann, Missouri USA </span>
        </div>
        <div className="current-weather-container">
          <div className="right-now-text"></div>
          <div className="weather-icon-container"></div>
          <div className="current-weather-main">
            <div className="current-temp"></div>
            <div className="sky-condition"></div>
            <div className="todays-high-low"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CurrentWeather;
