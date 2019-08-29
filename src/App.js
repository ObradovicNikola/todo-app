import React from 'react';
import './App.css';
import Background from './components/Background'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <Background />
      <TodoList />
    </div>
  );
}

export default App;
