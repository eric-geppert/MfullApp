import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./AddCalEntryForm.css";

export default class AddCalEntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: "",
      date: ""
    };
  }

  validateForm() {
    return this.state.calories.length > 0 && this.state.date.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

handleSubmit = async event => {
    event.preventDefault();
    try {
      fetch('40.113.216.49:8080/calorie/addCalEntry', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
        body: JSON.stringify({
          "calories":  this.state.calories,
          "date": this.state.date
        })
      }).then((response) => {
        if(response.status===200){
          console.log("(addCalEntryForm.js) adding calories ");
          alert("adding calories");
        }
        else if(response.status===403)
          console.log("403 access forbidden")
        else{
          console.log("(login.js) error: " + response.status)
        }
      })
    } catch (e) {
      alert(e.message);
    }
  }
  
  render() {
    return (
      <div className="AddCalEntry">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="calories" bsSize="large">
            <ControlLabel>calories</ControlLabel>
            <FormControl
              autoFocus
              type="number"
              value={this.state.calories}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="date" bsSize="large">
            <ControlLabel>date</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="String"
            />
            date must be in formate: 2019-04-01
            year-month-day
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}