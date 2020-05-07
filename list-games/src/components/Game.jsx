import React from "react";
import "./Game.scss";

export default function Game(props) {
  return (
    <div className="contain">
      <div className="align">
        <h2>{props.name}</h2>
        <p>Released on {props.released}</p>
      </div>
      <div className="align">
        <img src={props.background_image} alt={props.name} />{" "}
        <div>
          <p>Listen the clip's game</p>
          <iframe src={props.clip.clip} title={props.id} />
        </div>
      </div>
    </div>
  );
}
