import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const get_user = gql`
query {
  users {
    _id
    name
    age
  }
}
` 

function App() {
  const { loading, error, data } = useQuery(get_user)
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
