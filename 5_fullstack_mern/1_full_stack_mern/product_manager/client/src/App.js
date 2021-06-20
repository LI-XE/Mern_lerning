import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <AllProducts path="/" />
        {/* <ProductDetail path="/products/:id" /> */}
      </Router>
    </div>
  );
}

export default App;
