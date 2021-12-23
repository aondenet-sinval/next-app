import { useState, useCallback, memo } from "react";
import ReactDOM from "react-dom";

{/*A função abaixo preferencialmente deveria ser escrita num componente separado e importada
Decidi fazer o contrário por ser apenas didático:
*/}
const TodosCom = ({ todoscom, addTodoCom }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todoscom.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodoCom}>Add Todo</button>
    </>
  );
};

memo(TodosCom);

{/*Aplicando useCallback abaixo*/}

export default function UsesComCallback(){
  const [count, setCount] = useState(0);
  const [todoscom, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodoCom = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todoscom]);

  return (
    <>
      <TodosCom todoscom={todoscom} addTodoCom={addTodoCom} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

