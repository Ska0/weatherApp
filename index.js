const button = document.getElementById('location-form-button');
button.addEventListener('click', lookupWeather)
let weatherData;

async function fetchWeather(cityName){  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=0ad428c0aa0fcb8150ae2e14528b4521`, {mode: 'cors'});            
  weatherData = await response.json();
  console.log(weatherData);
}

function displayCityName(cityName) {
  const cityNameEle = document.getElementById('city-name-div');
  cityNameEle.textContent = cityName;
}

function displayIcon(iconCode) {

  const iconDiv = document.getElementById('current-weather-icon');
  iconDiv.innerHTML = '';
  const icon = new Image();
  icon.src = `http://openweathermap.org/img/w/${iconCode}.png`
  icon.id = 'icon'
  iconDiv.appendChild(icon);
}

function displayCurrentTemperature(currentTemp) {
  const unroundedTemp = currentTemp;
  const roundedTemp = unroundedTemp.toString().substring(0,2);
  const currentTempEle = document.getElementById('current-temperature');
  currentTempEle.textContent = `${roundedTemp}°F`;
}

function displayCurrentSkyDescription(skyDescription) {
  const currentWeatherSkies = document.getElementById('current-weather-skies');
  currentWeatherSkies.textContent = skyDescription;
}

function displayTodaysHigh(highTemp) {
  const unroundedTemp = highTemp;
  const roundedTemp = unroundedTemp.toString().substring(0,2);
  const highTemperature = document.getElementById('high-temperature');
  highTemperature.textContent = `${roundedTemp}°F`;
}

function displayTodaysLow(lowTemp) {
  const unroundedTemp = lowTemp;
  const roundedTemp = unroundedTemp.toString().substring(0,2);
  const lowTemperature = document.getElementById('low-temperature');
  lowTemperature.textContent = `${roundedTemp}°F`;
}

function convertDegToDirection(deg) {
  if (deg < 90) {
    return 'NE';
  } 
  else if (deg < 180) {
    return 'SE';
  } 
  else if (deg < 270) {
    return 'SW';
  }
  else {
    return 'NW';
  }
}

function displayWindSpeed(windDeg, windSpeed) {
  const windDirection = convertDegToDirection(windDeg);
  const windConditionsEle = document.getElementById('wind-conditions');
  windConditionsEle.textContent = `${windDirection} ${windSpeed} mph`;
}

function displayWindGusts(windGusts) {
  const windGustsEle = document.getElementById('wind-gusts');
  windGusts === undefined ? windGustsEle.textContent = '0 mph' : windGustsEle.textContent = `${windGusts} mph`;
}

function displayWindChill(feelsLike) {
  const unroundedTemp = feelsLike;
  const roundedTemp = unroundedTemp.toString().substring(0,2);
  const feelsLikeEle = document.getElementById('feels-like');
  feelsLikeEle.textContent = `${roundedTemp}°F`
}

function displayHumidity(currentHumidity) {
  const humidityEle = document.getElementById('humidity');
  humidityEle.textContent =  `${currentHumidity}%`;
}
function updateDOM() {
  displayCityName(weatherData.name);
  displayIcon(weatherData.weather[0].icon);
  displayCurrentTemperature(weatherData.main.temp);
  displayCurrentSkyDescription(weatherData.weather[0].description);
  displayTodaysHigh(weatherData.main.temp_max);
  displayTodaysLow(weatherData.main.temp_min);
  displayWindSpeed(weatherData.wind.deg, weatherData.wind.speed);
  displayWindGusts(weatherData.wind.gust);
  displayWindChill(weatherData.main.feels_like);
  displayHumidity(weatherData.main.humidity);
}

function lookupWeather(e){
  e.preventDefault();
  const citySearchInput = document.forms[0][0].value;
  fetchWeather(citySearchInput);
  setTimeout(updateDOM, 1500);
  
}

setTimeout(updateDOM, 1500);


if (weatherData === undefined) {
  fetchWeather('hermann');
}
