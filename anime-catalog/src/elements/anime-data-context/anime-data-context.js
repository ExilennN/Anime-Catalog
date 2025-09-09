import React, { createContext, useState, useEffect } from "react";

export const AnimeDataContext = createContext();

export function AnimeDataProvider({ children }) {
  const [seasonAnimeData, setSeasonAnimeData] = useState([]);
  const [isLoadedData, setIsLoadedData] = useState(false);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/seasons/now")
      .then((response) => response.json())
      .then((data) => setSeasonAnimeData(data.data))
      .then(() => setIsLoadedData(true))
  }, []);

  return (
    <AnimeDataContext.Provider value={{ seasonAnimeData, isLoadedData }}>
      {children}
    </AnimeDataContext.Provider>
  );
}