import axios from "axios";

import { BASE_URL, KEY } from "../env-config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
});

async function getCityWeather(city) {
  try {
    const response = await instance.get(
      `data/2.5/weather?q=${city}&appid=${KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.log("API Error", error);
  }
}

export default getCityWeather;
