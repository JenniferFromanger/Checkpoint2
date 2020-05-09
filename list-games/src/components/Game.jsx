import React from "react";
import "./Game.scss";

export default function Game(props) {
  return (
    <div className="contain">
      <div className="title">
        <h2>{props.name}</h2>
        <img src={props.background_image} alt={props.name} />
      </div>{" "}
      <div className="info">
        <p>Released on {props.released}</p>
        <p>Rating {props.rating}</p>
        <p>Listen the clip's game</p>
        <video src={props.clip.clip} title={props.id} muted></video>
        <p>
          <button
            onClick={() => {
              props.deleteGames(props.id);
            }}
          >
            Delete Game
          </button>
        </p>
      </div>
    </div>
  );
}
