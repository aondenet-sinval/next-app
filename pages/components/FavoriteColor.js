import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function FavoriteColor() {
  const [color, setColor] = useState("vermelha");

  return (
    <>
      <h1>Atualizando estado com useState:</h1>
      <h3>Minha cor favorita é: {color}!</h3>
      <button
        type="button"a
        onClick={() => setColor("azul")}
      >Azul</button>
      <button
        type="button"
        onClick={() => setColor("vermelho")}
      >Vermelho</button>
      <button
        type="button"
        onClick={() => setColor("amarelo")}
      >Amarelo</button>
      <button
        type="button"
        onClick={() => setColor("verde")}
      >Verde</button>
    </>
  );
}