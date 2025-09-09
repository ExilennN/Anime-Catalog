import React from "react";
import style from "./background-text-style.module.css";

function BackgroundText(){
    const year = new Date().getFullYear();
    let season;
    switch (new Date().getMonth()){
        case 11:
            case 0:
                case 1:
                    season = "Winter";
                    break;
        case 2:
            case 3:
                case 4:
                    season = "Spring";
                    break;
        case 5:
            case 6:
                case 7:
                    season = "Summer";
                    break;
        case 8:
            case 9:
                case 10:
                    season = "Fall"
                    break;
    }

    return(
        <div className={style.bgTxtWrapper}>
            <div className={style.line}>
                <span className={style.text}>{season} {year}</span>
            </div>
        </div>
    )
}

export default BackgroundText;