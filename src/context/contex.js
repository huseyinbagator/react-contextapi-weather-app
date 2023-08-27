import React, { createContext, useContext } from "react";

const WeatherContext = createContext();

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const data = {
    city: "Ankara",
    heat: 40,
    precipitation: 0,
    moisture: 20,
    wind: 15,
    day: "Çarşamba",
    weather: "Güneşli",
    weekdays: [
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
      "Pazartesi",
      "Salı",
    ],
  };

  return (
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
