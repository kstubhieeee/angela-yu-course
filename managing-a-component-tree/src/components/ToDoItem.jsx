import React from "react";

function TodoItem(props) {
  function handleChange() {}

  return (
    <div
      onClick={() => {
        props.delete(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}

export default TodoItem;
