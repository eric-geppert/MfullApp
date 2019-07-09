import React, { Component, Fragment } from "react";
// import ImageBackground from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
//bootstrap doesn't have a Container component, LIES!
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
// import findMyWorkoutPlan from './images/findMyWorkoutPlan.PNG';

// const backGroundStyle={
//   // ImageBackground: url(${findMyWorkoutPlan});
//   width: "100%",
//   height: "100%",
//   // height: "100px",
//   backGroundStyle: red
//   // color: red
//   // backgroundImage: "url(" + findMyWorkoutPlan + ")"
// }

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated:  true, //change later 
      isLoading: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    console.log("(app.js) isAuthenticated being set to: "+ authenticated)
    this.setState({ isAuthenticated: authenticated });
  }

  toggleLoading = () => {
    console.log("(app.js) setting isLoading to: "+ !this.state.isLoading);
    this.setState({isLoading: !this.state.isLoading});
  }
  
  handleLogout = event => {
    this.userHasAuthenticated(false);
    localStorage.clear();
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      isLoading: this.state.isLoading,
      toggleLoading: this.toggleLoading
    };
    
    return (
      // style={backGroundStyle}
      <div className="app-top" >

        {/* className="justify-content-center" activeKey=" */}
        {/* <Container> */}
        <Navbar>
          {/* fluid collapseOnSelect */}
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Homepage</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {/* <Navbar.Collapse> */}
            <Nav> 
            {this.state.isAuthenticated
              ? 
                <Fragment>
                  <LinkContainer to="/calorieGraphParent">
                    <NavItem>Calorie Graph</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/calorie">
                    <NavItem>Calorie Tracker</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/FindMyProgram">
                    <NavItem>Find my Program</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/Movement">
                    <NavItem>Movement Library</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/Testimonials">
                    <NavItem>Testimonials</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/" onClick={this.handleLogout}>
                    <NavItem>Logout</NavItem>
                  </LinkContainer>
                </Fragment>
              : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
            }
            </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
        {/* </Container> */}
        <Routes childProps={childProps} />
      </div>
    );
  }  
  
}

export default App;