import React from "react";
import memesdata from "../memesdata";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: memesdata.data.memes[Math.floor(Math.random() * memesdata.data.memes.length)].url
    })
 
    const [allMemeImages, setAllMemeImages] = React.useState(memesdata)

    function getMemesImage() {
        const memesArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomIndex].url
        setMeme(prevMeme =>( {   //arrow function, retorna um objeto, puxa todas as caracteristicas do objeto anterior com o ...prevMeme e seta a randomImage
            ...prevMeme,
            randomImage: url,
        }))
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
                <button type="button" onClick={getMemesImage}className="form--button">Get a new meme image 🖼</button>
            </form>
            {meme.randomImage && <img src={meme.randomImage} alt="memephoto" className="meme--image"/>}
        </main>
    );
}