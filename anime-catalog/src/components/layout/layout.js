import React from "react";
import style from "./layout-style.module.css"

import Header from "../header/header";


function Layout(props) {
    return(
        <div>
            <Header></Header>
            <div className={style.wrapper}>
                {props.children}
            </div>
            Footer HERE TRUST
        </div>
    )
}

export default Layout;