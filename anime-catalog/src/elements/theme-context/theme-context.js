import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useLocalStorage("theme", currentTheme ? "dark" : "light" );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

