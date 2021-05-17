import React from "react";

const TodoList = (props: any) => {

  return (
    <ol>
      {props.mytodos.map((todo: any) => {
        return <li> {todo}</li>;
      })}
    </ol>
  );
};
export default TodoList;
