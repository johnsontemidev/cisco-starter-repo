import logo from './portfoliopic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn more about my expertise.
        </p>
        <a
          className="App-link"
          href="https://johnsontemidev-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Johnsontemidev Mini-Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
