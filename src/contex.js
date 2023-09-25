import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [thema, setThema] = useState("light");

  return (
    <Context.Provider
      value={{
        weather,
        setWeather,
        thema,
        setThema,
      }}
    >
      {children}
    </Context.Provider>
  );
};
