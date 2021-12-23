import { useState} from "react";
import ReactDOM from "react-dom";

{/*Aqui está o exemplo completo sem usar React Context:*/}
export default function CompartilhandoEstado1() {
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

