import React, { useState } from "react";

// GENERICS IN TYPESCRIPT ...
// Form Component => Function based component
const Form = (props:any) => {
  // useSTate
  const [todo, setTodo] = useState("");
 

  const Submit = (event: any) => {
    event.preventDefault();
  
    props.setTodos([...props.mytodos,todo])
  };

  const handleChange = (event: any) => {
    setTodo(event.target.value);
    
  };
  return (
    <form onSubmit={Submit}>
      <input type="text" onChange={handleChange} />
      <button type="submit"> Add</button>
    </form>
  );
};

export default Form;
