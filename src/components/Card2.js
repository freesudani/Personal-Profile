import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Packages.css";

function Card2(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card">
        <img
          scr={props.list.image}
          alt={props.list.title}
          className="card-image"
        />
        <h3>{props.list.title}</h3>
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div className="card">
        <p>{props.list.desc}</p>
        <p>{props.list.price}</p>
        <ul>
          {props.list.details.map((detail) => {
            return <li>{detail}</li>;
          })}
        </ul>
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
}

export default Card2;
