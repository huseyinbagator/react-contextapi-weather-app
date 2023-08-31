import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
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
  const [weather, setWeather] = useState(data);

  return (
    <Context.Provider value={{
      weather,
      setWeather
    }}>
      {children}
    </Context.Provider>
  );
};
