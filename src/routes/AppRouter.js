import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NameModule from "../views/nameModule";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <NameModule />
        </Route>
      </Switch>
    </Router>
  );
}
