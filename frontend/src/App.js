import React from "react";
// import BrowserRouter from "react-router-dom/BrowserRouter";
// import Route from "react-router-dom/Route";
// import Switch from "react-router-dom/Switch";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
// import Player from "./Pages/Player";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: false,
      currentUserUsername: ''
    }
  }

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
