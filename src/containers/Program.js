import React, { Component } from "react";
import { pdfjs } from 'react-pdf';
import SimpleMenu from "../components/SimpleMenu";
import workoutList from "../workout.json";
import RadioButton from "../components/RadioButton";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import "./Testimonials.css";

export default class Program extends Component {
//----
  constructor(){
    super();
    // console.log("props in constructor:", props);
    this.state={
      search: ""
    }; //why need^??????
    this.onButtonUpdate=this.onButtonUpdate.bind(this);
  }
  // state = {
  //   search: ""
  // };
//----


  renderWorkout = workout => {
    const { search } = this.state; //just added was "gain"
    // const search = "gain";
    // var code = country.code.toLowerCase();
    var goal=workout.goal; //was "gain"
    if( search !== "" && workout.goal.indexOf( search ) === -1 ){
        return null
    }
  
    return (
      <SimpleMenu name={workout.name} /> //add file later!!!
      );
    };
    
    onchange = e => {
      this.setState({ search: e.target.value });
    };
    //need^????????????????????
    onButtonUpdate(buttonValue) {
      // console.log("search:", search);
      this.setState({search: buttonValue}); //this.value
    };

  render() {
    const { search } = this.state;
    //why was it a const? (below)
    var filteredWorkouts = workoutList.filter(workout => {
      return workout.goal === "search";
    });

    if(filteredWorkouts.length === 0)
    {
      filteredWorkouts=workoutList; //if nothing selected display all
    }
    // console.log(filteredWorkouts)
    return (
      <div className= "wholePage">
                                          {/* have to use bind since used this in update Function */}
        {/* <RadioButton onchange={this.onchange} UpdateButton={this.onButtonUpdate.bind(this)} />  */}
        <RadioButton onClick={this.onchange} UpdateButton={this.onButtonUpdate.bind(this)} /> 
      {/* // <SimpleMenu name={workoutList[0].name} file={require("../images/handout.pdf")} /> */}
          <div className="row">
            {filteredWorkouts.map(workout => {
              return this.renderWorkout(workout);
            })}
          </div>
      </div>
    );
  }
}