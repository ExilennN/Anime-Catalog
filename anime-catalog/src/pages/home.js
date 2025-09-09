import React, {useContext} from "react";
import style from "./styles/home-style.module.css"

import { AnimeDataContext } from "../elements/anime-data-context/anime-data-context";

import Layout from '../components/layout/layout';
import AnimeCard from "../elements/anime-card/anime-card";
import FeaturedAnime from "../elements/featured-anime/featured-anime";
import BeltCarousel from "../elements/belt-carousel/belt-carousel";
import NotLoaded from "./not-loaded";



function Home(){
    const {seasonAnimeData, isLoadedData} = useContext(AnimeDataContext);
    if (!isLoadedData) {
        return <NotLoaded></NotLoaded>;
    }

    return(
        <div>
            <Layout>
                <div className={style.mainWrapper}>
                    <FeaturedAnime ANIME_DATA={seasonAnimeData[0]}></FeaturedAnime>

                    <BeltCarousel></BeltCarousel>

                    <div className={style.animeSearchWrapper}>
                        search the anime this season
                        <input type="text"></input>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Home;
