import logo from './logo.svg';
import './App.css';
import Article from "./components/Article";
import React,{useState} from 'react';


function App() {
  const [count,setCount] = useState(0)
  const countUp = ()=>{
    setCount(prevState => prevState + 1)
  }
  const countDown = ()=>{
    setCount(prevState => prevState - 1)
  }



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

        <p>現在のカウント数:{count}</p>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
  

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
