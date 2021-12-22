import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>Atualizando estado com useState:</h1>
      <h3>Minha cor favorita é: {color}!</h3>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}