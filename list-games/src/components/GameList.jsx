import React, { useState, useEffect } from "react";
import Game from "./Game";
import axios from "axios";

export default function GameList() {
  const [games, setGames] = useState([]);
  const [toggleBestGame, setToggleBestGame] = useState(false);

  useEffect(() => {
    getGamesData();
  }, []);

  const getGamesData = () => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((res) => {
        setGames(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteGames = (id) => {
    const filterGames = games.filter((game) => {
      return game.id !== id;
    });
    setGames(filterGames);
  };

  const filterBestGame = () => {
    if (!toggleBestGame) {
      const newGames = games.filter((game) => {
        return game.rating >= 4.5;
      });
      setToggleBestGame(!toggleBestGame);
      setGames(newGames);
    } else {
      getGamesData();
      setToggleBestGame(!toggleBestGame);
    }
  };

  return (
    <div>
      <button onClick={() => filterBestGame()}>
        {toggleBestGame ? "All Games" : "Best Games"}
      </button>
      {games.map((game) => (
        <Game key={game.id} {...game} deleteGames={deleteGames} />
      ))}
    </div>
  );
}
