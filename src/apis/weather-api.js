import axios from "axios";
import { useContext } from "react";
import { Context } from "../contex.js";

const key = "KEY";

async function getCityWeather(setWeather) {
  try {
    const instance = axios.create({
      baseURL: "https://api.openweathermap.org/",
      timeout: 2000,
    });
    const response = await instance.get(
      `data/2.5/weather?q=London&appid=${key}&units=metric`
    );
    setWeather(response.data);

    console.log(response.data);
  } catch (error) {
    console.log("API Hatası", error);
  }
}

export default getCityWeather;
