import { useState, useCallback, memo } from "react";
import ReactDOM from "react-dom";

{/*A função abaixo preferencialmente deveria ser escrita num componente separado e importada
Decidi fazer o contrário por ser apenas didático:
*/}


const TodosSem = ({ todos, addTodoSem }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodoSem}>Add Todo</button>
    </>
  );
};

memo(TodosSem);

export default function UseSemCallback(){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <TodosSem todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
