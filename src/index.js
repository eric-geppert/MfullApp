import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { withRouter as Router } from "react-router-dom";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/Store/Store';
import findMyWorkoutPlan from './images/findMyWorkoutPlan.PNG';

const backGroundStyle={
  // ImageBackground: url(${findMyWorkoutPlan});
  width: "100%",
  // height: "100%",
  height: "1000px",
  backgroundImage: "url(" + findMyWorkoutPlan + ")"
}
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store} style={backGroundStyle}> {/* for redux store updates (needs to be on root component) */}
    {/* <Router>       */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);

// If you want app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// service worker link: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
