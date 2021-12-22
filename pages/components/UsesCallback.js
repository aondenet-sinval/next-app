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

export function UseSemCallback(){
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

export const UseComCallback = () => {
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
