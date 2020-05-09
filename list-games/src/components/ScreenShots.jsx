import React from "react";
import "./ScreenShots";
import { useParams, Link } from "react-router-dom";

export default function ScreenShots({ games }) {
  let { number } = useParams();

  return (
    <div className={number}>
      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <img src={game.short_screenshots[1].image} alt={game.name} />
          <Link to="/">
            <p>Game List Homepage</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
