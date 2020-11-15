import React from "react";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgSrc} alt="moviePic" className="cardImg" />
        <div className="cardInfo">
          <span className="cardCategory">{props.title}</span>
          <h3 className="cardTitle">{props.name}</h3>
          <a href={props.link} target="blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
