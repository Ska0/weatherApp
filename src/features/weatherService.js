const apiWeatherRequest = async (userRequest) => {
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/current?city=${userRequest}&units=i&key=5809fe6507124357a12249fed5a203a4&include=minutely`
  );
  return await response.json();
};

const apiForecastRequest = async (userRequest) => {
  const response = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${userRequest}&units=i&key=5809fe6507124357a12249fed5a203a4`
  );
  return await response.json();
};

const roundNumber = (unroundedNumber) =>
parseInt(unroundedNumber.toString().substring(0, 2));

const trimDate = (untrimmedDate) => untrimmedDate.substring(5).replace('-','/');



const weatherService = {
  apiWeatherRequest,
  apiForecastRequest,
  roundNumber,
  trimDate,
};

export default weatherService;
