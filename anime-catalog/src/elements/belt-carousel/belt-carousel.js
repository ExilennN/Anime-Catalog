import React, {useContext} from "react";
import style from "./belt-carousel-style.module.css";

import { AnimeDataContext } from "../anime-data-context/anime-data-context";


function firstTenElements(arr) {
    const result = [];
    const n = 10;

    for (let i = 0; i < n; i++) {
        result.push(arr[i % arr.length].images.jpg.image_url); 
    }

    return result;
}

function BeltCarousel() {
  const {seasonAnimeData} = useContext(AnimeDataContext);

  const animeImages = firstTenElements(seasonAnimeData);
  const duplicatedAnimeImages = [...animeImages, ...animeImages];

  return (
    <div className={style.carousel}>
      <div className={style.carouselTrack}>
         {duplicatedAnimeImages.map((img, index) => (
          <div key={index} className={style.carouselItem}>
            <img src={img}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeltCarousel;
