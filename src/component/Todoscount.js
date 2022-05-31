import React from "react";

const Todoscount = ({ state }) => {
  let Done = 0,
    NotYet = 0;

  state.map((item) => {
    if (item.isDone) {
      return Done++;
    } else {
      return NotYet++;
    }
  });

  return (
    <div className="todo-count-container">
      <div>
        Done: <span>{Done}</span>
      </div>
      <div>
        Not Yet: <span>{NotYet}</span>
      </div>
    </div>
  );
};

export default Todoscount;
