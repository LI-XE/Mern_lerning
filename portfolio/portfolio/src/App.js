import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/Maincontent';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      {/* Navbar */}
      <Navbar />
      {/* MainContent */}
      <MainContent/>
      {/* Projects */}
    </div>
  );
}

export default App;
