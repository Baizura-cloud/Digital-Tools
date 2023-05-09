import React from 'react';
import { Counter } from './features/counter/Counter';
import { MainTab } from './features/mainTab'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <MainTab />
      </header>
    </div>
  );
}

export default App;
