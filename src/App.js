import logo from './logo.svg';
import './App.css';

/**
 * Use this way to add imports from /src/js to be used inside React components
 */
import { onClick } from './js/lesson_1/homework';

function App() {
  return (
    <div className="App">
      <header className="App-header" onClick={onClick}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to React, bro!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
