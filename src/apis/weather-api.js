import axios from "axios";
import { useContext } from "react";
import { Context } from "../contex.js";

const key = "ba06cd5f2509319ce061807dd26c8a4c";
const instance = axios.create({
  baseURL: "https://api.openweathermap.org/",
  timeout: 2000,
});
async function getCityWeather(city) {
  try {
    
    const response = await instance.get(
      `data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    return response.data;

    
  } catch (error) {
    console.log("API Hatası", error);
  }
}

export default getCityWeather;
