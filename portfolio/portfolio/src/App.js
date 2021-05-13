import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/Maincontent';
import Projects from './views/Projects';
import Project from './views/Projects';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      {/* Navbar */}
      <Navbar />
      {/* MainContent */}
      <MainContent/>
      {/* Projects */}
      <Projects />
    </div>
  );
}

export default App;
