import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Redirect } from 'react-router-dom'
import "./Signup.css";

export default class Signup2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      Cpassword: "",
      redirect: false
    };
  }

  renderRedirect = () => {
    console.log("redirecting: " + this.state.redirect);
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 
     && (this.state.password===this.state.Cpassword);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

handleSubmit = async event => {
    event.preventDefault();
    try {
      this.props.toggleLoading();
      fetch('https://40.113.216.49:8080/api/v0/register/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "username":  this.state.email,
          "password": this.state.password
        })
      }).then((response) => {
          console.log("response: "+ response.status);
        if(response.status===200){
            console.log("(login.js) registered")
            this.setState({redirect:true});
            this.props.toggleLoading();
            alert("registered: ");
        }
        else{
          console.log("(login.js) error");
          this.props.toggleLoading();
          alert("error: "+ response.status);
        }
      })
    } catch (e) {
      alert(e.message);
    }
  }
  
  render() {
    return (
      <div className="Signup">
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="Cpassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              value={this.state.Cpassword}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
    );
  }
}
