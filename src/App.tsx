import React, { useState } from 'react';
import './assets/css/App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import LoginForm from './components/Login';
import TodoList from './components/TodoList';

// const todos = ["hello today", "go shopping", "go for Eid"]

// NOTE ;: HTML_like syntax ==> JSX, others are normal JS/TS

// To pass JS to JSX we use {}
function App() {
  const [todos, setTodos] = useState(["Go for Eid"])
  return (
    <div className="App">
      {/* <section>
        <h1>Todo app</h1>
        <Form mytodos={todos} setTodos={setTodos} />
        <TodoList mytodos={todos} />
      </section>
      <section>
        <h1>counter</h1>
        <Counter />
      </section> */}
      <section>
        <h1>Login Form</h1>
        <LoginForm />
      </section>


    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...
