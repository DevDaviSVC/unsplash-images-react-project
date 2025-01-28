import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add("dark-theme");
        } else {
            document.body.classList.remove("dark-theme");
        }
    }, [darkTheme]);

    const toggleDarkTheme = () => {
        setDarkTheme(currentState => !currentState);
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