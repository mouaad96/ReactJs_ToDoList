import React from "react";

const Todos = ({ state, dispatch, don }) => {
  return (
    <ul className="todo-list-container">
      {state.length > 0 ? (
        state.map((item) => (
          <li key={item.id}>
            <p
              style={
                item.isDone
                  ? {
                      textDecoration: "line-through",
                      textDecorationColor: "white",
                    }
                  : { textDecoration: "none" }
              }
            >
              {item.todo}
            </p>
            <div className="todo-buttons">
              <span
                onClick={() => dispatch({ type: "TOGGLE_TODO", id: item.id })}
              >
                {item.isDone ? (
                  <i className="fa-solid fa-x"></i>
                ) : (
                  <i className="fa-solid fa-check"></i>
                )}
              </span>
              <span
                onClick={() => dispatch({ type: "DELETE_TODO", id: item.id })}
              >
                <i className="fa-solid fa-trash"></i>
              </span>
            </div>
          </li>
        ))
      ) : (
        <p className="no-todo-msg">No ToDos !</p>
      )}
    </ul>
  );
};

export default Todos;
