import React, {useState, useEffect} from "react";
import useLocalStorage from "use-local-storage";
import Home from "./pages/home";

import './App.css';


function App() {

  const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', currentTheme ? 'dark' : 'light');

  const switchTheme = () =>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="app" data-theme={theme}>
      <Home></Home>
      <span>Change theme</span>
      <button onClick={switchTheme}>Switch to {theme === "light" ? "Dark" : "Light"} theme</button>
    </div>
  );
}

export default App;
