import React, { Component, useState, useEffect } from 'react';


export default function Notice() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Nota: O array [] deps vazio significa
  // este useEffect será executado uma vez
  // semelhante ao componentDidMount()
  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/produtos")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Um momento por favor ...</div>;
  } else {
    return (
      <div>
        {items.map(item => (
          <p key={item.id}>
            {item.titulo} {item.catId}{item.catTitle}
          </p>
        ))}
      </div>
    );
  }
}