import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Topbar from "Components/Header";

const Router = () => (
  <BrowserRouter>
    <>
    <Topbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
    </>
  </BrowserRouter>
);

export default Router;