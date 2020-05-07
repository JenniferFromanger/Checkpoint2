import React from "react";
import Game from "./Game";

export default function GameList({ games }) {
  return (
    <div>
      {games.map((game) => (
        <Game key={game.id} {...game} />
      ))}
    </div>
  );
}
