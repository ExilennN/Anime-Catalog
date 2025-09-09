import React, {useEffect, useState} from "react";
import style from "./styles/anime-page-style.module.css";
import { useParams } from "react-router";

import Layout from "../components/layout/layout";
import NotLoaded from "./not-loaded";
import ExpandableBlock from "../elements/expandable-block/expandable-block";

function cleanSynopsis(text) {
  if (!text) return "";
  return text.replace(/\[Written by MAL Rewrite\]/gi, "").trim();
}

function AnimePage(){
    const { id } = useParams();
    const [anime, setAnime] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   

    useEffect(() => {
    async function fetchAnime() {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnime(data.data);
        } 
        catch (err) { setError("Failed to fetch anime details."); } 
        finally { setLoading(false); }
    }
    fetchAnime();
    }, [id]);

    if (loading) return <NotLoaded></NotLoaded>;
    if (error) return <div>{error}</div>;

    return(
        <div>
            <Layout>
                <div className={style.mainWrapper}>
                    <h1>{anime.title_english || anime.title}</h1>
                    <div className={style.bodyWrapper}>
                        <div className={style.leftBlockWrapper}>
                            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <span className={style.statsText}>Score: {anime.score || "N/A"}</span>
                                <span className={style.statsText}>Episodes: {anime.episodes || "?"}</span>
                            </div>
                            
                            <span>Status: {anime.status}</span>
                        </div>
                        <div className={style.infoWrapper}>
                            <div className={style.ratingWrapper}>
                                <span>{anime.rating}</span>
                                <div className={style.genreWrapper}>
                                    {anime.genres.map(genre => <span key={genre.mal_id}>{genre.name}</span> )}
                                </div>
                            </div>
                            <ExpandableBlock title="Synopsis" defaultOpen={true}>
                                {cleanSynopsis(anime.synopsis)}
                            </ExpandableBlock>
                            <div>
                                Studio
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AnimePage;