import React from "react";
import style from "./featured-anime-style.module.css";

function shortSummary(text){
    return text.slice(0, 200) + (text.length > 200 ? "..." : "");
}


function FeaturedAnime({ANIME_DATA}){
    return(
        <div
        className={style.mainWrapper}
        style={{
            backgroundImage: `linear-gradient(to top right, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0) 90%), url(${ANIME_DATA.trailer.images.maximum_image_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "75% 50%",
        }}
        >
            <div className={style.textWrapper}>
                <h1>{ANIME_DATA.title_english}</h1>
                <p>
                {shortSummary(ANIME_DATA.synopsis)}
                </p>
            </div>
        </div>
    )
}

export default FeaturedAnime;
