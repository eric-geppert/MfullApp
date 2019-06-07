import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Testimonials from './containers/Testimonials';
import Movement from './containers/Movement';
import RadioButton from './components/RadioButton'
import Signup from './containers/Signup2'; //gets Signup2 dont forget
import CalorieTracker from './containers/CalorieTracker';
import CalorieGraphParent from './components/CalorieGraphParent';

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/calorie" exact component={CalorieTracker} props={childProps} />
    <AppliedRoute path="/CalorieGraphParent" exact component={CalorieGraphParent} props={childProps} />
    <AppliedRoute path="/Signup" exact component={Signup} props={childProps} /> 
    <AppliedRoute path="/Testimonials" exact component={Testimonials} props={childProps} />
    <AppliedRoute path="/RadioButton" exact component={RadioButton} props={childProps} /> 
    <AppliedRoute path="/Movement" exact component={Movement} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;