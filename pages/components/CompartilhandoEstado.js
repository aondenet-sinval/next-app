import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";

{/*Aqui está o exemplo completo sem usar React Context:*/}
export function CompartilhandoEstado1() {
  const [user, setUser] = useState("Sinval Gomes");

  return (
    <>
      <h3>{`Hello ${user}!`}</h3>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <h3>Component 2</h3>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h3>Component 3</h3>
      <Component4 user={user} />
    </>
  );
}
function Component4({ user }) {
  return (
    <>
      <h3>Component 4</h3>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h3>Component 5</h3>
      <h3>{`Hello ${user} again!`}</h3>
    </>
  );
}

{/*Aqui está o exemplo completo usando React Context:*/}

const UserContext = createContext();

export function ComponentOne() {
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

