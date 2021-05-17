import React, { useState } from 'react';
import './assets/css/App.css';

//components
import LoginForm from './components/LoginForm';

// App component
function App() {
  return (
    <div className="App">
      <section>
        <h1>Login Form</h1>
        <LoginForm />
      </section>

    </div>
  );
}

export default App;


//NOTE: use auto-import vscode...
