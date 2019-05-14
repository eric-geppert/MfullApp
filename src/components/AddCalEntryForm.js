import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import userHasAuthenticated from '../App';
import toggleLoading from '../App';
import { Redirect } from 'react-router-dom'
import "./AddCalEntryForm.css";

export default class AddCalEntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calories: "",
      date: ""
    };
  }

  // renderRedirect = () => {
  //   console.log("redirecting: " + this.state.redirect);
  //   if (this.state.redirect) {
  //     return <Redirect to='/' />
  //   }
  // }

  validateForm() {
    return this.state.calories.length > 0 && this.state.date.length > 0; //add more checks for the date!!!
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

handleSubmit = async event => {
    event.preventDefault();
    try { //fetch returns a promise, when catch it no longer a promise?
      // this.props.toggleLoading(); //pass it to parent as prop
      fetch('http://localHost:8080/calorie/addCalEntry', {
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
          // this.props.toggleLoading();
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
    // this.setState({calories: ""});
    // this.state.calories= "";
    console.log("this.state.calories.value: "+ this.state.calories.value);
    console.log("this.state.calories: "+ this.state.calories);
  }
  
  render() {
    return (
      <div className="AddCalEntry">
        {/* {this.renderRedirect()} */}
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="calories" bsSize="large">
            <ControlLabel>calories</ControlLabel>
            <FormControl
              autoFocus
              type="number"
              value={this.state.email}
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











// import React from "react";
// import AddCalEntryReq from '../httpRequests/post/AddCalEntryReq';

// class AddCalEntryForm extends React.Component {
//   constructor(props) { //add props???
//     super(props);
//     this.state={
//       calories: '',
//       date: ''
//     };
//     this.handleCalorieChange = this.handleCalorieChange.bind(this);
//     this.handleDateChange = this.handleDateChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleCalorieChange(event) {
//     // console.log("[event.target.id]: "+ [event.target.id])
//     console.log("event.target.label: "+ event.target.label);
//     console.log("event.target.input: "+ event.target.input);
//     console.log("event.target.id.event: "+ event.target.event);

//     this.setState({calories: event.target.value});
//   }
//   handleDateChange(event) {
//     this.setState({date: event.target.value});
//   }

//   handleSubmit(event) {
//     AddCalEntryReq(this.state.calories,this.state.date);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label id="username" >Enter calories </label>
//         <input name="calories" type="int" value={this.state.value} onChange={this.handleCalorieChange} />
//                           {/* text vs String????? */}
//         <label> Enter date
//           <input  name="date" type="string" value={this.state.value} onChange={this.handleDateChange} />
//         </label>
//         <button>Send data!</button>
//       </form>
//     );
//   }
// }
// export default AddCalEntryForm;