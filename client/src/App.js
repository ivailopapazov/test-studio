import React, { useEffect, useState } from 'react';
import Message from './components/Message';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({}); 

  useEffect(() => {
    fetch('http://localhost:5000/people/10')
      .then(res => res.json())
      .then(data => setData(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{data.name}</h1>
        <h2>{data.id}</h2>
        <Message text="Hello Wolrd" />
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
