import React from "react";

export default function Game(props) {
  return (
    <div>
      {" "}
      <h1>{props.name}</h1>
      <p>{props.released}</p>
      <img src={props.background_image} alt={props.name} />
      <p></p>{" "}
    </div>
  );
}
