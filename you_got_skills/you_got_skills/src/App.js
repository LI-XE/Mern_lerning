import Logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Input from './components/Input';
import Display from './components/Display';
import React, { useState } from 'react';

function App() {
  const username ="Kevin";
  const [ skillList, setSkillList ] = useState([]);

  return (
    <div className="App">
      <h1>You have Got skills</h1>
      {/* <img src={Logo } alt="logo" /> */}
      <Input name={ username } skillList={ skillList } setSkillList={ setSkillList } />
      <Display name={ username } skillList={ skillList } />
      <Footer />
    </div>
  );
}

export default App;
