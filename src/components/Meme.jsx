import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function EventHandler() {
    const memesArray = memesData.data.memes;

    const randonNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randonNumber].url;
    setMemeImage(() => url);
    console.log(memeImage);
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
      <img className="main--image" src={memeImage} alt="" />
    </main>
  );
}

export default Meme;
