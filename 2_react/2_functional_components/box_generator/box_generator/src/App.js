import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import FormBonus from './components/FormBonus';
import DisplayBonus from './components/DisplayBonus';

function App() {
  const [ colorArray, setColorArray ] = useState([]);
  const [ boxArray, setBoxArray ] = useState([]);
  return (
    <div className="App">
      <Form colorArray={colorArray} setColorArray={setColorArray} />
      <Display colorArray={ colorArray } />
      <div>
        <FormBonus boxArray={boxArray} setBoxArray={setBoxArray}/>
        <DisplayBonus boxArray={boxArray} />  
      </div>
    </div>
  );
}

export default App;
