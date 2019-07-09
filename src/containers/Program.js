import React, { Component } from "react";
import { pdfjs } from 'react-pdf';
import SimpleMenu from "../components/SimpleMenu";
// import { View, ListView, StyleSheet, Text } from 'react-native';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// const buttonStyle={
  
//   width: "100px"
// }

class Program extends Component {

  // constructor(props){
    // super(props); //need to initialize with props?
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // };
  // }
  
  renderWorkout(workout){
    return (
      //style={buttonStyle}
      <SimpleMenu test={workout.name} pages={workout.pages} key={workout.name} name={workout.name} file={workout.pdfLink} />
      );
    };
  
  render() {
    var programWorkouts;
    if(typeof this.props.days==="undefined"){
      console.log("program.js: props undefined")
    }
    else if(this.props.days==="all")
      programWorkouts=this.props.dayList;
    else{
      programWorkouts= this.props.dayList.filter(workout => 
        (this.props.days===workout.days));
    }
    
    return (
      <div >
        {programWorkouts.map(workout => {
            return this.renderWorkout(workout)
          })}
      </div>
    //   <ListView
    //   // style={styles.container}
    //   dataSource={this.state.dataSource}
    //   // renderRow={(data) => <View><Text>{data}</Text></View>}
    //   renderRow={(data) => <View><Text>{data}</Text></View>}
    // />
    );

  }
}

export default Program;
