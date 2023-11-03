import './App.css';
import headshot from './resources/dom_headshot.jpg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
