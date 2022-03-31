import React from "react";
import face from "../images/troll-face.png";
console.log(face);
function Header() {
  return (
    <header className="header">
      <img className="header--img" src={face} alt="troll" />
      <h2 className="header--text">Meme Generator</h2>
      <h4 className="header--text-right">React course</h4>
    </header>
  );
}

export default Header;
