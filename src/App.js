import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import Users from "./components/Users/Users";
import Home from "./components/Home/Home";

function App() {
  return (
      <Router>
        <div className="App">
          <div className={"menu"}>
            <div className="menu-icon">
              <img src="logo192.png" alt=""/>
            </div>
            <Link to={"/"} className={"menu-item"} >Home</Link>
            <Link to={"/users"}  className={"menu-item"} >Users</Link>
          </div>

          <Switch>
            <Route path={"/"} exact={true} render={() => {
              return <Home />
            }} />
            <Route path={"/users"} render={() => <Users  />} />
          </Switch>


        </div>
      </Router>
  );
}

export default App;
