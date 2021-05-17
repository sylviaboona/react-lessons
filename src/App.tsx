import React, { useState } from 'react';
import './assets/css/App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState(["Go for Eid"])
  return (
    <div className="App">
      <section>
        <h1>Todo App</h1>
        <Form />
        <TodoList />
      </section>

    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...
