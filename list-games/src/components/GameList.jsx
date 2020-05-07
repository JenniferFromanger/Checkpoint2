import React, { useState, useEffect } from "react";
import Game from "./Game";
import axios from "axios";

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredGames = (e) => {
    return games.filter((game) => {
      return game.id !== e.target.value;
    });
  };
  return (
    <div>
      {games.map((game) => (
        <Game key={game.id} {...game} onClick={filteredGames} />
      ))}
    </div>
  );
}
