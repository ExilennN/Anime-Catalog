import React from "react";
import style from "./anime-preview-style.module.css";
import { Link } from "react-router";

function createAnimeLink(id, title) {
  const slug = title
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");   
  return `/anime/${id}/${slug}`;
}

function AnimePreview({id, image_url, title, title_english, synopsis, score, episodes, genres}){
    const displayTitle = title_english || title;

    return(
        <Link to={createAnimeLink(id, displayTitle)} className={style.linkWrapper}>
            <div className={style.mainWrapper}>
                <div className={style.infoWrapper}>
                    <img className={style.imgPoster} src={image_url}/>
                
                    <div className={style.overlay}>
                        <h3>{displayTitle}</h3>
                        <div className={style.genreWrapper}>
                            {genres.map(genre => <span key={genre.mal_id}>{genre.name}</span> )}
                        </div>
                        <p>{synopsis ? synopsis.length >= 120 ? synopsis.slice(0, 120) + "..." : synopsis : ""}</p>
                        <span>⭐ {score || "N/A"}</span>
                        <span>🎬 {episodes || "?"} {episodes > 1 ? "episodes" : "episode"}</span>
                    </div>
                </div>
                <div className={style.title}>{displayTitle}</div>    
            </div>
        </Link>
    )
}

export default AnimePreview;