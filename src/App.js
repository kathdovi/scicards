import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import WelcomePage from "./Components/WelcomePage";
import Carousel from "./Components/Carousel";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Team from './Components/Team';

const Main = () => (
  <Switch>
    <Route exact path="/" component={WelcomePage} />
    <Route exact path="/bonecards" component={Carousel} />
    <Route exact path="/team" component={Team} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
