import React from "react";
import memesdata from "../memesdata";

export default function Meme() {
    const [memeImg, setMemeImg] = React.useState("");
 
    function handleClick() {
        let randomIndex = Math.floor(Math.random() * memesdata.data.memes.length)
        setMemeImg(memesdata.data.memes[randomIndex].url)
    }
    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    className="form--input"   
                    placeholder="Top text"
                />
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"

                />
                <button type="button" onClick={handleClick}className="form--button">Get a new meme image 🖼</button>
            </form>
            {memeImg && <img src={memeImg} alt="memephoto" className="meme--image"/>}
        </main>
    );
}