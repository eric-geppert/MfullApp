import React, { Component } from "react";
import AddCalEntryForm from '../components/AddCalEntryForm';

export default class CalorieTracker extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>input Calories</h1>
          <AddCalEntryForm/>
        </div>
      </div>
    );
  }
}