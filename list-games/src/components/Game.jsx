import React from "react";
import "./Game.scss";

export default function Game(props, { filteredGames }) {
  return (
    <div className="contain">
      <div className="title">
        <h2>{props.name}</h2>
        <img src={props.background_image} alt={props.name} />
      </div>{" "}
      <div className="info">
        <p>Released on {props.released}</p>
        <p>Listen the clip's game</p>
        <iframe src={props.clip.clip} title={props.id} />
        <p>
          <button value={props.id} onClick={filteredGames}>
            Delete Game
          </button>
        </p>
      </div>
    </div>
  );
}
