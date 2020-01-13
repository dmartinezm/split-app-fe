import React from "react";
import { Switch, Route } from "react-router-dom";
import Pages from "./Pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Pages.Login} />
    </Switch>
  );
};

export default Routes;
