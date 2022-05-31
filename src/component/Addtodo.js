import React, { useReducer, useState } from "react";
import Todos from "./Todos";
import Todoscount from "./Todoscount";
import { v4 as uuidv4 } from "uuid";

const Addtodo = () => {
  const [todo, setTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, []);
  function reducer(state, action) {
    switch (action.type) {
      case "ADD-TODOS": {
        setTodo("");
        return [...state, { todo, id: uuidv4(), isDone: false }];
      }

      case "DELETE_TODO":
        return state.filter((todo) => todo.id !== action.id);

      case "TOGGLE_TODO":
        return state.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }

          return {
            ...todo,
            isDone: !todo.isDone,
          };
        });

      default:
        return state;
    }
  }

  return (
    <div className="container">
      <div className="add-todo-container">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter A Todo!"
        />
        <button onClick={() => dispatch({ type: "ADD-TODOS" })}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <Todos state={state} dispatch={dispatch} />
      <Todoscount state={state} />
    </div>
  );
};

export default Addtodo;
