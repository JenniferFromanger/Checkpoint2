import React from "react";
import "./App.css";
import GameList from "./components/GameList";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Games Lists</h1>
        <GameList />
      </div>
    </BrowserRouter>
  );
}

export default App;
