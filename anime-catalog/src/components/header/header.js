import React, { useContext } from "react";
import style from "./header-style.module.css";
import BackgroundText from "../../elements/background-text/background-text";
import { ThemeContext } from "../../elements/theme-context/theme-context";
import { Link } from "react-router";

function Header(){
    const {theme, setTheme} = useContext(ThemeContext);

    const switchTheme = () =>{
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
    }

    return(
        <div className={style.headerMain}>
            <div className={style.headerWrapper}>
                <div><Link onClick={() => window.scrollTo(0, 0)} className={style.captionName} to="/">Anime Hole</Link></div>
                <BackgroundText></BackgroundText>
                <button onClick={switchTheme}>Switch to {theme === "light" ? "Dark" : "Light"} theme</button>
            </div>  
        </div>
    )
}

export default Header;