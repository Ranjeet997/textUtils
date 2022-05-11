import React from "react";
import Home from "./components/Home";
import About1 from "./components/About1";
import { Route, Switch } from "react-router-dom";

function Apps() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About1 />
        </Route>
      </Switch>
    </>
  );
}

export default Apps;
