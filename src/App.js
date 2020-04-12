import React ,  { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Button from '@material-ui/core/Button';
import KKKK from "./TestButton"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './screen/About'
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

  const [test, setTest] = useState(true);
  const [count, setCount] = useState(0);

  // check state if changed
  // 1   2   3      => 1 2 3
  useEffect(() => {
    console.log("chay ham useEffect")
    //goi API => 
  });

  useEffect(()=> {
    console.log("use Effect ==>> ")
      //get list User
  }, [])

  console.log(data)
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_self"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <KKKK test={"blue"}/>
        <Button onClick={() =>{
            setTest(!test)
        }} variant="contained" color={test? "primary" : "secondary"}>
  {test ? "Primary" : "Secondary"}
</Button>

<Button onClick={() =>{
            setCount(count + 1)
        }} variant="contained" >OK</Button>
        <li><Link to="/about">About</Link></li>
      <div onClick={()=>console.log("DIV----")}> Count la {count}</div>
      </header>
    </div>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch></Router>
  );
}

export default App;
