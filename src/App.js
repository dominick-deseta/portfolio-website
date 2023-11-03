import logo from './logo.svg';
import './App.css';
import headshot from './resources/dom_headshot.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="App-logo" alt="logo" />
        <p>
          Look at me spin!
        </p>

      </header>
    </div>
  );
}

export default App;
