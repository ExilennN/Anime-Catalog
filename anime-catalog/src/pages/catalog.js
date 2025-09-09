import React, {useContext} from "react";
import style from "./styles/catalog-style.module.css";
import { AnimeDataContext } from "../elements/anime-data-context/anime-data-context";

import Layout from "../components/layout/layout";
import AnimePreview from "../elements/anime-preview/anime-preview";
import NotLoaded from "./not-loaded";

function showAnimeCatalog(seasonalAnime){
    let animeData = seasonalAnime.map(anime => <AnimePreview id={anime.mal_id} image_url={anime.images.jpg.image_url} title={anime.title} title_english={anime.title_english} synopsis={anime.synopsis} score={anime.score} episodes={anime.episodes} genres={anime.genres}></AnimePreview>)
    return(
        <div className={style.animeInnerWrapper}>
            {animeData}
        </div>
    )
}

function Catalog(){
    const { seasonAnimeData, isLoadedData } = useContext(AnimeDataContext);

    if (!isLoadedData) return <NotLoaded></NotLoaded>;

    return(
        <div>
            <Layout>
                <div className={style.filtersNav}>
                    <span>NEW  </span>
                    <span>Filter by:</span>
                </div>
                <div className={style.animeWrapper}>
                    {showAnimeCatalog(seasonAnimeData)}
                </div>
            </Layout>
        </div>
    )
}

export default Catalog;