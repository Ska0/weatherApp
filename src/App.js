import logo from "./assets/logo.svg";
import "./stylesheets/App.css";
import { useState, useEffect } from "react";
import { getForecast, getWeather } from "./features/weatherSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Header from './components/Header';
import Current from "./components/Current";
import Forecast from "./components/Forecast";


function App() {
  const dispatch = useDispatch();
 
  const { apiWeatherResponse, apiForecastResponse, isLoading, isError, message } = useSelector(
    (state) => state.weather
  );



  useEffect(() => {
    if (apiWeatherResponse === undefined) {
      dispatch(getWeather("Hermann"));
    }

    if (apiForecastResponse === undefined) {
      dispatch(getForecast("Hermann"));
    }

    if(apiWeatherResponse !== undefined) {
    
    }
  }, [apiWeatherResponse, apiForecastResponse, dispatch]);


  return (
    <div className="App">
      <Header />
      <Current />
      <Forecast forecastArr={apiForecastResponse} />
    </div>
  );
}

export default App;
