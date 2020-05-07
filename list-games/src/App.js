import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GameList from "./components/GameList";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((res) => {
        setGames(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Games Lists</h1>
      <GameList games={games} />
    </div>
  );
}

export default App;
