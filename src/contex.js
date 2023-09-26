import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [theme, setTheme] = useState("light");

  return (
    <Context.Provider
      value={{
        weather,
        setWeather,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};
