import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./Pages";

const Routes = () => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route path="/login" component={Pages.Login} />
        <Route path="/signup" component={Pages.Signup} />
        <Route path="/dashboard" component={Pages.Dashboard} />
      </Switch>
    </div>
  );
};

export default Routes;
