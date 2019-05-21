import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./AddCalEntryForm.css";
import CalorieGraph from '../containers/CalorieGraph';

export default class CalorieGraphParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      showForm: true,
      CalorieGoal: ""
    };
  }

  validateForm() {
    return this.state.startDate.length > 0 && this.state.endDate.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({showForm:false});
  }

  renderForm = () => {
    if(this.state.showForm)
      return <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="startDate" bsSize="large">
              <ControlLabel>startDate</ControlLabel>
              <FormControl
              autoFocus
              type="String"
              value={this.state.startDate}
              onChange={this.handleChange}
              />
          </FormGroup>
          <p>
          endDate must be in formate: 2019-04-01
              year-month-day
          </p>
          <FormGroup controlId="endDate" bsSize="large">
            <ControlLabel>endDate</ControlLabel>
            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="String"
          />
          <p>
          endDate must be in formate: 2019-04-01
          year-month-day
          </p>
          </FormGroup>
          <FormGroup controlId="CalorieGoal" bsSize="large">
              <ControlLabel>CalorieGoal</ControlLabel>
              <FormControl
              value={this.state.CalorieGoal}
              onChange={this.handleChange}
              type="number"
              />
              Calorie Goal/day
          </FormGroup>
          <Button
              block
              bsSize="large"
              // disabled={!this.valiendDateForm()}   //fix validate form function later
              type="submit"
          >
              Submit
          </Button>
        </form>
      else
        return <CalorieGraph showForm={this.state.showForm} 
        startDate={this.state.startDate} 
        endDate={this.state.endDate}
        goal={this.state.CalorieGoal}/>;
  }
  
  render() {
    return (
      <div className="AddCalEntry">
        {this.renderForm()}
      </div>
    );
  }
}