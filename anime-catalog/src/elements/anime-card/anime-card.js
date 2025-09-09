import React from "react";
import style from "./anime-card-style.module.css"

let ANIME_DATA;

function AnimeCard(props){
    ANIME_DATA = props.ANIME_DATA;

    return(
        <div>
            Anime CArd
        </div>
    )
}

export default AnimeCard;