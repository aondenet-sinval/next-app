import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
{/*Aqui está o exemplo completo usando React Context:*/}

const UserContext = createContext();

export default function ComponentOne() {
  const [user, setUser] = useState("Sinval Gomes");

  return (
    <UserContext.Provider value={user}>
      <h3>{`Oi ${user}!`}</h3>
      <ComponentTwo user={user} />
    </UserContext.Provider>
  )
}

function ComponentTwo() {
  return (
    <>
      <h3>Component 2</h3>
      <ComponentThree />
    </>
  );
}

function ComponentThree() {
  return (
    <>
      <h3>Component 3</h3>
      <ComponentFour />
    </>
  );
}

function ComponentFour() {
  const user = useContext(UserContext);	
  return (
    <>
      <h3>Component 4</h3>
      <h3>{`Hello ${user} again!`}</h3>
      {/*Posso pegar o contexto em qualquer lugar, veja acima*/}      
      <ComponentFive />
    </>
  );
}

function ComponentFive() {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component 5</h3>
      <h3>{`Hello ${user} again!`}</h3>
    </>
  );
}

