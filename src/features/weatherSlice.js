import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  cityName: undefined,
  stateCode: undefined,
  country: undefined,
  icon: undefined,
  currentTemperature: undefined,
  currentSkies: undefined,
  todayHigh: undefined,
  todayLow: undefined,
  windDir: undefined,
  windSpeed: undefined,
  windGusts: undefined,
  feelsLike: undefined,
  humidity: undefined,
  message: undefined,
  apiWeatherResponse: undefined,
  apiForecastResponse: undefined,
} 

export const getWeather = createAsyncThunk( 
  'weather/getWeather',
  async (userRequest) => {
    const response = await weatherService.apiWeatherRequest(userRequest);
    return response;
  }
)

export const getForecast = createAsyncThunk(
  'weather/getForecast',
  async (userRequest) => {
    const response = await weatherService.apiForecastRequest(userRequest);
    return response;
  }
)

   


export const weatherSlice = createSlice({ 
  name: 'weather',
  initialState,
  reducers: {
},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.apiWeatherResponse = action.payload.data[0];
        state.cityName = action.payload.data[0].city_name;
        state.stateCode = action.payload.data[0].state_code;
        state.country = action.payload.data[0].country_code;
        state.icon = action.payload.data[0].weather.code;
        state.currentTemperature = action.payload.data[0].temp;
        state.currentSkies = action.payload.data[0].weather.description;
        state.windDir = action.payload.data[0].wind_cdir;
        state.windSpeed = action.payload.data[0].wind_spd;
        state.feelsLike = action.payload.data[0].app_temp;
        state.humidity = weatherService.roundNumber(action.payload.data[0].rh);
        state.todayHigh = undefined;
        state.todayLow = undefined;
        state.windGusts = undefined;
        
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getForecast.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.apiForecastResponse = action.payload.data;
        state.todayHigh = action.payload.data[0].high_temp;
        state.todayLow = action.payload.data[0].low_temp;
        state.windGusts = action.payload.data[0].wind_gust_spd;
        
      })
      .addCase(getForecast.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
})


export default weatherSlice.reducer;