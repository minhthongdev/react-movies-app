import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/signin" component={Signin} />
          <Route path="/detail" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
