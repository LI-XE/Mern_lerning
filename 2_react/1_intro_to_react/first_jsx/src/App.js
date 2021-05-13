import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div>
            <h1>Hello Dojo</h1>
            <h3>Things I need to do:</h3>
            <ul className="todo">
              <li>Learn React</li>
              <li>Climb Mt.Everest</li>
              <li>Run a marathon</li>
              <li>Feed the dogs</li>
            </ul>
          </div>
      </header>
    </div>
  );
}

export default App;
