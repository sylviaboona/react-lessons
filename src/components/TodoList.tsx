import React from "react";

const TodoList = (props: any) => {

  return (
    <ol className="list-group list-group-numbered">
      {props.mytodos.map((todo: any) => {
        return <li className="list-group-item"> {todo}</li>;
      })}
    </ol>
  );
};
export default TodoList;
