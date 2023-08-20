import React from "react";
import logoImg from '../images/troll-face.png'
function Header() {
    return(
        <header className="navbar">
            <img src={logoImg} alt="trollfacelogo" className="navbar--logo"/>
            <h2 className="navbar--title">Meme Generator</h2>
            <h4 className="navbar--project">React Course - Project 3</h4>
        </header>
    );
}

export default Header;