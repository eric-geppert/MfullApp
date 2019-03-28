import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false //change back
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }
  
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    }; //Pass the Session State to the Routes
    
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Homepage</Link>
              <Link to="/Program" style={{paddingLeft:25}}>Find my Program</Link>
              <Link to="/Movement" style={{paddingLeft:25}}>Movement Library</Link>
              <Link to="/Testimonials" style={{paddingLeft:25}}>Testimonials</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
            {this.state.isAuthenticated
              ? //<div>
                  <NavItem onClick={this.handleLogout}>Logout</NavItem>
                  //  <LinkContainer to="/Program">
                  //   <NavItem>Find My Program</NavItem>
                  // </LinkContainer>
                  // <LinkContainer to="/Testimonials">
                  //   <NavItem>Testimonials</NavItem>
                  // </LinkContainer> */}
                //</div>
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
    );
  }  
  
}

export default App;



{/* <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer> */}

// render() {
//   return (
//     <div className="App container">
//       <Navbar fluid collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link to="/">Scratch</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//         <Navbar.Collapse>
//           <Nav pullRight>
//             <NavItem href="/signup">Signup</NavItem>
//             {/* moved away from these because it refreshs the
//             page and we are making a single page app */}
//             <NavItem href="/login">Login</NavItem>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }