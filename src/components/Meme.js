import React from "react";


export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    
    const [allMemeImages, setAllMemeImages] = React.useState({})


    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])


    function getMemesImage() {

        const randomIndex = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomIndex].url
        setMeme(prevMeme =>( {   //arrow function, retorna um objeto, puxa todas as caracteristicas do objeto anterior com o ...prevMeme e seta a randomImage
            ...prevMeme,
            randomImage: url,
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(function(prevData){
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    return(
        <main>
            <form className="form">
                <input 
                    type="text"
                    className="form--input"   
                    placeholder="Top text"
                    value={meme.topText}
                    onChange={handleChange}
                    name="topText"
                />
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Bottom text"
                    value={meme.bottomText}
                    onChange={handleChange}
                    name="bottomText"

                />
                <button type="button" onClick={getMemesImage}className="form--button">Get a new meme image 🖼</button>
            </form>
            <div className="memeContainer">
                {meme.randomImage && <img src={meme.randomImage} alt="memephoto" className="meme--image"/>}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}