import React, { Component } from "react";
import { pdfjs } from 'react-pdf';
import SimpleMenu from "../components/SimpleMenu";
// import handout from '../images/handout';
// import store from '../Redux/Store/Store';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class Program extends Component {

  renderWorkout(workout){
    return (                                            //workout.pdfLink
      <SimpleMenu key={workout.name} name={workout.name} file={workout.pdfLink}/>
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
