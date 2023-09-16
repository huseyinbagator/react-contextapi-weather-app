import React, { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});

  return (
    <Context.Provider
      value={{
        weather,
        setWeather,
      }}
    >
      {children}
    </Context.Provider>
  );
};
