import { useState } from "react";
import ReactDOM from "react-dom";

export default function DefCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "vermelho"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "azul" }
    });
  }

  return (
    <>
      <h3>Meu {car.brand}</h3>
      <p>
        Este &eacute; um {car.color} {car.model} de {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}