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
    const gameId = Number(e.target.value);
    const filterGames = games.filter((game) => {
      return game.id !== gameId;
    });
    setGames(filterGames);
  };
  return (
    <div>
      {games.map((game) => (
        <Game key={game.id} {...game} filteredGames={filteredGames} />
      ))}
    </div>
  );
}
