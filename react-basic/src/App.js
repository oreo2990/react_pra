import logo from './logo.svg';
import './App.css';
import Article from "./components/Article";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          新・日本一わかりやすいReact入門シリーズで環境構築しました。
        </p>

        <Article 
          tittle="コンポーネントの練習"
          content="コンポーネントは便利"
        />

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
