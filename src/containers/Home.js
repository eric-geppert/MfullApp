import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import "./Home.css";

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home" >
        <div className="lander">
          <div className="pic">
            <img
                style={{
                  width: "40%",
                  marginTop: "-10%",
                  marginBottom: "-10%"
                }}
                src={require('../images/blackLogo.png')}
              />
            </div>
            <p>Everyone needs a plan in gym. </p>
            <p> Reach your fitness goals with our workout plan database that has plans for all people of all fitness levels </p>
              <Button color="primary" style={{marginRight:"100px", marginTop: "50px"}}>
                <Link to="/FindMyProgram"> 
                  <a style={{color: "#ffffff"}}>
                    Find a Plan
                  </a>
                </Link>
              </Button>
              <Button color="primary" style={{ marginTop: "50px"}}>
                <Link to="/Signup"> 
                  <a style={{color: "#ffffff"}}>
                    Sign Up
                  </a>
                </Link>
              </Button>
        </div> 
      </div>
    );
  }
}