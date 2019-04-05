import React, { Component } from "react";
import { pdfjs } from 'react-pdf';
import SimpleMenu from "../components/SimpleMenu";
// import store from '../Redux/Store/Store';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Program extends Component {

  renderWorkout(workout){
    return (
      <SimpleMenu key={workout.name} name={workout.name}/>
      );
    };
  
  render() {
    var programWorkouts;
    if(typeof this.props.skill==="undefined"){
      console.log("program.js: props undefined")
    }
    else if(this.props.skill==="all")
      programWorkouts=this.props.skillList;
    else{
      programWorkouts= this.props.skillList.filter(workout => 
        (this.props.skill===workout.skill));
    }
    
    return (
      <div>
        {programWorkouts.map(workout => {
            return this.renderWorkout(workout)
          })}
      </div>
    );

  }
}

export default Program;
