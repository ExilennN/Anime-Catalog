import React from "react";
import style from "./layout-style.css"

import Header from "../header/header";

function Layout(props) {
    return(
        <div>
            <Header></Header>
            <div style={{minHeight: "100vh"}}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;