import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BsCheckAll } from "react-icons/bs";
import networkReceieve from "../images/network-receive.png";
import "./Packages.css";
import "../index.css";

const Card1 = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card">
        <div className="image-box">
          <img
            src={props.list.image}
            alt={props.list.title}
            className="card-image"
          />
        </div>
        <h3 className="card-title">{props.list.title}</h3>
        <button onClick={handleClick} className="btn-flip">
          more details
        </button>
      </div>
      <div className="card">
        <h4 className="card-backheading">{props.list.desc}</h4>
        <h4 className="card-price">
          {props.list.price.toLocaleString("en-US")}฿
        </h4>
        <ul className="card-list">
          {props.list.details.map((detail, index) => {
            return (
              <li className="card-item" key={index}>
                <span className="card-icon">
                  <BsCheckAll />
                </span>
                <p className="card-detail">{detail}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={handleClick} className="btn-flip">
          Go back
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Card1;
