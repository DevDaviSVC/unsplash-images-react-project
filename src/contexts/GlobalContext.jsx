import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const { body } = document;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      body.classList.add("dark-theme");
      return true;
    }
    return false;
  });

  const toggleDarkTheme = () => {
    setDarkTheme((currentState) => {
      document.body.classList.toggle("dark-theme", !currentState);
      return !currentState;
    });
  };

    const values = {
        darkTheme,
        toggleDarkTheme
    };

    return (
        <GlobalContext.Provider value={values} >
            {children}
        </GlobalContext.Provider>
    )
};