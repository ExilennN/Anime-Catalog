import React, {useState, useEffect, useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import { ThemeProvider } from "./elements/theme-context/theme-context";
import { AnimeDataProvider} from "./elements/anime-data-context/anime-data-context";
import './App.css';

import Home from "./pages/home";
import Catalog from "./pages/catalog";
import AnimePage from "./pages/anime-page";

function App() {  
  return (
    <ThemeProvider>
      <AnimeDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/anime" element={<Catalog/>}/>
            <Route path="/anime/:id/:name" element={<AnimePage/>}/>
          </Routes>
        </BrowserRouter>
      </AnimeDataProvider>
    </ThemeProvider> 
  );
}

export default App;
