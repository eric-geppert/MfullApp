import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
// import Testimonials from './containers/Testimonials'; //change to is loading symbollllllllllllll
// import configureStore from "./Redux/Store/Store.js";            //added for redux
// import { Provider as ReduxProvider } from "react-redux"; //

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated:  true, 
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
    }; //Pass the Session State to the Routes
    
    // const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

    return (
      // <ReduxProvider store={reduxStore}>
    // !this.state.isLoading &&
    // <div className="outside">
    // {!this.state.isLoading 
    //   ?
    //   <div className="if not loading">
        <div className="app top">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Homepage</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight> 
             {/* //take out and customize to fix red error  */}
            {this.state.isAuthenticated
              ? 
              // <div className="is isAuthenticated=true" style={{flex:1}}>
              // {/* <Fragment> */}
                  // {/* <Link to="/RadioButton" style={{paddingLeft:25}}>Find my Program</Link>
                  // <Link to="/Movement" style={{paddingLeft:25}}>Movement Library</Link>
                  // <Link to="/Testimonials" style={{paddingLeft:25}}>Testimonials</Link> */}
                  // {/* <Link to="/" onClick={this.handleLogout} style={{paddingLeft:250}}>Logout</Link> */}
                <Fragment>
                  <LinkContainer to="/calorieGraph">
                    <NavItem>Calorie Graph</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/calorie">
                    <NavItem>Calorie Tracker</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/RadioButton">
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
                  // {/* <NavItem onClick={this.handleLogout}>Logout</NavItem>  */}
// {/* need to be inside nav */}
                //   {/* //  <LinkContainer to="/Program">
                //   //   <NavItem>Find My Program</NavItem>
                //   // </LinkContainer>
                //   // <LinkContainer to="/Testimonials">
                //   //   <NavItem>Testimonials</NavItem>
                //   // </LinkContainer> */}
                //  {/* </div> */}
                // {/* </Fragment> */}
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
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
      // : 
      //   <div className="if is loading">
      //     <Testimonials/>
      //   </div>
      //     }
      // {/* // </ReduxProvider> */}
      // </div>
    );
  }  
  
}

export default App;