import React, { useState, useEffect } from "react";
import { ReactComponent as ClearSkyDay } from "../assets/animatedIcons/day.svg";
import { ReactComponent as Tstorm } from "../assets/animatedIcons/t-storm.svg";
import { ReactComponent as Drizzle } from "../assets/animatedIcons/drizzle.svg";
import { ReactComponent as Cloudy } from "../assets/animatedIcons/cloudy.svg";
import { ReactComponent as CloudyDayOne } from "../assets/animatedIcons/cloudy-day-1.svg";
import { ReactComponent as CloudyDayTwo } from "../assets/animatedIcons/cloudy-day-2.svg";
import { ReactComponent as CloudyDayThree } from "../assets/animatedIcons/cloudy-day-3.svg";
import { ReactComponent as LightSnow } from "../assets/animatedIcons/light-snow.svg";
import { ReactComponent as Snow } from "../assets/animatedIcons/snow.svg";
import { ReactComponent as HeavySnow } from "../assets/animatedIcons/heavy-snow.svg";
import { ReactComponent as LightRain } from "../assets/animatedIcons/light-rain.svg";
import { ReactComponent as Rain } from "../assets/animatedIcons/rain.svg";
import { ReactComponent as HeavyRain } from "../assets/animatedIcons/heavy-rain.svg";
import { ReactComponent as LightShowerRain } from "../assets/animatedIcons/light-shower-rain.svg";
import { ReactComponent as ShowerRain } from "../assets/animatedIcons/shower-rain.svg";

function WeatherIcon({ iconCode }) {
  const [icon, setIcon] = useState();
  const selectIcon = (iconCode) => {
    if (iconCode >= 200 && iconCode <= 233) {
      return setIcon(<Tstorm className="weather-icon" />);
    }
    if (iconCode >= 301 && iconCode <= 302) {
      return setIcon(<Drizzle className="weather-icon" />);
    }
    if (iconCode === 500) {
      return setIcon(<LightRain className="weather-icon" />);
    }
    if (iconCode === 501) {
      return setIcon(<Rain className="weather-icon" />);
    }
    if (
      iconCode === 502 ||
      iconCode === 511 ||
      iconCode === 522 ||
      iconCode === 900
    ) {
      return setIcon(<HeavyRain className="weather-icon" />);
    }
    if (iconCode === 520) {
      return setIcon(<LightShowerRain className="weather-icon" />);
    }
    if (iconCode === 521) {
      return setIcon(<ShowerRain className="weather-icon" />);
    }
    if (iconCode === 600 || iconCode === 623) {
      return setIcon(<LightSnow className="weather-icon" />);
    }
    if (iconCode === 601) {
      return setIcon(<Snow className="weather-icon" />);
    }
    if (iconCode === 602 || (iconCode >= 610 && iconCode <= 612)) {
      return setIcon(<HeavySnow className="weather-icon" />);
    }
    if ((iconCode >= 700 && iconCode <= 751) || iconCode === 804) {
      return setIcon(<Cloudy className="weather-icon" />);
    }
    if (iconCode === 800) {
      return setIcon(<ClearSkyDay className="weather-icon" />);
    }
    if (iconCode === 801) {
      return setIcon(<CloudyDayOne className="weather-icon" />);
    }
    if (iconCode === 802) {
      return setIcon(<CloudyDayTwo className="weather-icon" />);
    }
    if (iconCode === 803) {
      return setIcon(<CloudyDayThree className="weather-icon" />);
    }
  };

  useEffect(() => {
    if (iconCode !== undefined) {
      selectIcon(iconCode);
    }
  }, [iconCode]);

  return <div className="weather-icon-container">{icon}</div>;
}

export default WeatherIcon;
