import memesData from "../memesData";

function EventHandler() {
  const memesArray = memesData.data.memes;

  const randonNumber = Math.floor(Math.random() * memesArray.length);
  const url = memesArray[randonNumber].url;
  console.log(url);
}

function Meme() {
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
    </main>
  );
}

export default Meme;
