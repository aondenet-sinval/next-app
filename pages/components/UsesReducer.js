import { useReducer } from "react";
import ReactDOM from "react-dom";

const initialPessoas = [
  {
    id: 1,
    nome: "Sinval Gomes",
    complete: false,
  },
  {
    id: 2,
    nome: "João Paulo",
    complete: false,
  },
  {
    id: 3,
    nome: "Ana Clara",
    complete: false,
  },
  {
    id: 4,
    nome: "Marília Gabriela",
    complete: false,
  },  
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function Pessoas() {
  const [todos, dispatch] = useReducer(reducer, initialPessoas);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div className="bg-secondary" key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.nome}
          </label>
        </div>
      ))}
    </>
  );
}