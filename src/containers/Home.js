import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
// import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Home.css";
import { Button } from "@material-ui/core";

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home" >
        <div className="lander">
          <div className="pic">
            <img
                style={{
                  // flex: 1, //does nothing
                  // alignSelf: 'stretch',
                  width: "40%",
                  marginTop: "-10%",
                  marginBottom: "-10%"
                  // height: undefined,
                }}
                src={require('../images/blackLogo.png')}

                // src={require('../images/findMyWorkoutPlan.PNG')}
              />
            </div>
          {/* <div className="info"> */}
            {/* <h1>mission statement:</h1> */}
            <p>Everyone needs a plan in gym. </p>
            <p> Reach your fitness goals with our workout plan database that has plans for all people of all fitness levels </p>
          {/* </div> */}
          <Button>
            <Link to="/FindMyProgram">FIND A PLAN</Link>
          </Button>
          {/* <LinkContainer to='/FindMyProgram'/> */}
            {/* <NavItem>Homepage</NavItem> */}
          {/* </LinkContainer> */}
        </div> 
      </div>
    );
  }
}