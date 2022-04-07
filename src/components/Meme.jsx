import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randonImage: "https://i.imgflip.com/261o3j.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function EventHandler() {
    const memesArray = allMemeImages.data.memes;
    const randonNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randonNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randonImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          className="form--input"
          type="text"
          placeholder="Top Text"
        ></input>
        <input
          className="form--input"
          type="text"
          placeholder="Bottom Text"
        ></input>
        <button type="submit" onClick={EventHandler} className="form--btn">
          Get a new meme image 🖼
        </button>
      </div>
      <img className="main--image" src={meme.randonImage} alt="" />
    </main>
  );
}

export default Meme;
