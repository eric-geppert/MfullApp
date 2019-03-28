import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Testimonials from './containers/Testimonials';
import Program from './containers/Program';
import Movement from './containers/Movement';

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/Testimonials" exact component={Testimonials} props={childProps} />
    <AppliedRoute path="/Program" exact component={Program} props={childProps} />
    <AppliedRoute path="/Movement" exact component={Movement} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;