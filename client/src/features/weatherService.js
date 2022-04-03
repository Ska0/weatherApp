import axios from 'axios'
import { useState } from 'react'


const getWeather = async (userRequest) => {
  const config = {
    API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=0ad428c0aa0fcb8150ae2e14528b4521`
    
  }
  const res = await axios.get()
}