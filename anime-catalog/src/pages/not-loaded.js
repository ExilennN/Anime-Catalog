import React from "react"
import style from "./styles/not-loaded-style.module.css";

import Layout from "../components/layout/layout";

function NotLoaded(){
    return(
        <div>
            <Layout>
                <div className={style.mainWrapper}>
                    <div className={style.loader}></div>
                </div>
            </Layout>
        </div>
    )
}
export default NotLoaded;