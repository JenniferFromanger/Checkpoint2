import React from "react";
import "./ScreenShots.scss";
import { useParams, Link } from "react-router-dom";

export default function ScreenShots({ games }) {
  let { number } = useParams();
  const numbers = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className={number}>
      {games.map((game) => (
        <div key={game.id}>
          <h2>{game.name}</h2>
          <h3>All ScreenShots</h3>
          {numbers.map((num) => (
            <img
              className="images"
              src={game.short_screenshots[num].image}
              alt={game.name}
            />
          ))}
          <Link to="/">
            <p className="link">Game List Homepage</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
