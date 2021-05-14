import React, { useState } from 'react';
import './assets/css/App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import TodoList from './components/TodoList';

// const todos = ["hello today", "go shopping", "go for Eid"]

// NOTE ;: HTML_like syntax ==> JSX, others are normal JS/TS

// To pass JS to JSX we use {}
function App() {
const [todos, setTodos]= useState(["Go for Eid"])
  return (
    <div className="App">
    <Form mytodos={todos} setTodos={setTodos}/>
    <TodoList mytodos={todos} />
    <Counter/>
    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...
