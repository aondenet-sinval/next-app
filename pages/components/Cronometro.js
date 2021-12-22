import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Cronometro() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>Renderiza&ccedil;&atilde;o a {count} segundos!</h1>;
}