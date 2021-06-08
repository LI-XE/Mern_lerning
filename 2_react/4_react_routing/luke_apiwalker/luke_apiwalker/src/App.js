import React from 'react';
import './App.css';
import Form from './components/Form';
import { Router } from '@reach/router';
import NotFound from './components/NotFound';
import People from './components/People';
import Planet from './components/Planet';
import Species from './components/Species';
import Vehicles from './components/Vehicles';


function App() {


  return (
    <div className="App">
      <Form />
      <Router>
        <People path="/people/:id" />
        <Planet path ="/planets/:id" />
        <Species path="/species/:id" />
        <Vehicles path="/vehicles/:id" />
        <NotFound path="/obiwan" />
      </Router>
    </div>
  );
}

export default App;
