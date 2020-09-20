import React from "react";

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Player from "./Pages/Player";

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.listenToChange = this.listenToChange.bind(this);
    this.state = {
      isAuthenticated: false,
      currentUserUsername: ''
    }
  }

  listenToChange(e){
    if(e['status'] === true){
      this.setState({
        currentUserUsername: e['username'],
        isAuthenticated: e['status']
      });
    }
    else{
      alert("Wrong credentials");
    }
  }

  render(){

    let home;
    if(this.state.isAuthenticated === true){
      home = <Player username={this.state.username} />;
    }
    else{
      home = <Login statusListener={this.listenToChange} />;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <SignUp username={this.state.username} authenticationStatus={this.isAuthenticated}  />
          </Route>
          <Route path="/">
            {home}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
