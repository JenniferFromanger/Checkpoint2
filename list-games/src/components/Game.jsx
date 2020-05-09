import React from "react";
import "./Game.scss";
import { Link } from "react-router-dom";

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
        <video
          src={props.clip.clip}
          title={props.id}
          type="video/mp4"
          controls="controls"
        ></video>
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
      <nav>
        <ul>
          <li>
            <Link to={`/jeu/screenshots/${props.id}`}>
              <p className="link">Game List Screenshots</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
