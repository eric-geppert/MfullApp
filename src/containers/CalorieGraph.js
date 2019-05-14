import React from "react";
import './CalorieGraph.css';
// import 'react-vis/dist/style.css';
import {
    FlexibleXYPlot,
    // XYPlot,
    XAxis,
    YAxis,
    // LineMarkSeries,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend,
    // LineSeries
} from 'react-vis';
// import yAxis from "react-vis/dist/plot/axis/y-axis";

const goal=2000;
const tempBlueData=[];
const tempRedData=[];

const calories=[
  {x: 'Monday', y: 3},
  {x: 'Tuesday', y: 7},
  {x: 'Wednesday', y: 14},
  {x: 'Thursday', y: 0},
  {x: 'Friday', y: 5},
  {x: 'Saturday', y: 22},
  {x: 'Sunday', y: 8}
];
const endCals=[];

export default class CalorieGraph extends React.Component {
  state = {
    height: 0,
    width: 0,
    useCanvas: false,
    entries: [],
    blueData: [],
    redData:[]
  }

  getCalsBetween = () =>{
    try { //fetch returns a promise, when catch it no longer a promise?
      // this.props.toggleLoading(); //pass it to parent as prop
      
      fetch('http://localHost:8080/calorie/getEntriesBetween', {
        // fetch('http://localHost:8080/calorie/getEntriesBetween', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      
        body: JSON.stringify({
          // "calories":  this.state.calories,
          // "date": this.state.date
          "start": "2019-04-01", //hardcoded for testing
	        "end": "2019-05-09"
        })
      }).then((response) => response.json())  
      .then( json=> {
        json.forEach(entry => {
          endCals.push({x: entry.date, y: entry.calories});
          // var tempArr=[entry.date,entry.calories];
          // endCals.push({x:tempArr[0],y:tempArr[1]});
        });
        // this.setState({entries: endCals});
        console.log("endCals (in req): " ,endCals);
        this.overUnder(endCals,goal);
      })
    } catch (e) {
      alert(e.message);
    }
  }
  overUnder = (entries,goal) =>{
    console.log("entries (in overUnder): ", entries);
    console.log("entries[0].y: ", entries[0].y);

    // console.log("entries[0].y: ", entries[0].y);
    for(let i=0; i<entries.length; i++){
      // console.log("entries[i]: ", entries[i]);

      // if(entries.length===0)
      //   console.log("not set")
      if(entries[i].y>goal){
        tempBlueData.push({x: entries[i].x, y: goal}); //cut off at goal
        // tempBlueData[i].y=goal;
        tempRedData.push({x: entries[i].x, y: entries[i].y-goal});
        // tempRedData[i].y=calories[i].y-goal;
      }
      else if(goal>entries[i].y){
        tempBlueData.push({x: entries[i].x, y: entries[i].y});
        // tempBlueData[i].y=calories[i].y;
      }
      else if(goal===entries[i].y){
        tempBlueData.push({x: entries[i].x, y: goal});
        // tempBlueData[i].y=goal;
      }
      else 
        console.error("error in overUnder function");
    }
    console.log("tempBlueData: ",tempBlueData);
    console.log("tempRedData: ",tempRedData);

    this.setState({blueData:tempBlueData, redData: tempRedData })
  }
  // overUnder = (calories,goal) =>{
  //   for(let i=0; i<7; i++){
  //     if(calories[i].y>goal){
  //       blueData[i].y=goal;
  //       redData[i].y=calories[i].y-goal;
  //     }
  //     else if(goal>calories[i].y){
  //       blueData[i].y=calories[i].y;
  //     }
  //     else if(goal===calories[i].y){
  //       blueData[i].y=goal;
  //     }
  //     else 
  //       console.error("error in overUnder function");
  //   }
  // }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.getCalsBetween();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    // this.getCalsBetween();

  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  };

  render() {
    // this.overUnder(this.state.entries,goal); //move to didMount???
    // this.overUnder(calories,goal); //was here originally and worked
    const {useCanvas} = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    // const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';
    
    return (
      <div className="top XYplot" >
        {/* <div className="Home"> */}
          <div className="goal">
            <h1>
              Your goal is: {goal} calories per day
            </h1>
          </div>
        {/* </div> */}
        <FlexibleXYPlot
          // className="clustered-stacked-bar-chart-example"
          xType="ordinal"
          stackBy="y"
          margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
          width= {this.state.width}
          height= {this.state.height-200}
          //71 for appbar +60 (maybe 120 for header padding) +40 for footers
        >
          <DiscreteColorLegend
            // style={{position: 'absolute', left: '50px', top: '10px'}}
            style={{left: '50px', top: '10px'}}
            orientation="horizontal"
            items={[
              {
                title: 'Calories over your goal',
                color: 'red'
              },
              {
                title: 'Actual Calories',
                color: '#79C7E3'
              }
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {console.log("endCals (in render return): ", endCals)}
          {/* <BarSeries
            cluster="2019"
            color="#79C7E3"
            data={this.state.blueData}
            // data={endCals}
          /> */}
          {console.error("blue: ",this.state.blueData)}
          {console.error("red: ", this.state.redData)}
          {/* <line data={x1={this.state.blueData[0].x}} x2=4}/> */}
          <BarSeries
            cluster="2019"
            color="#79C7E3"
            data={this.state.blueData}
          />
          <BarSeries
            cluster="2019"
            color = "red"// color="#12939A"
            data={this.state.redData}
          />
        </FlexibleXYPlot>
      </div>
    );
  }
}



// {/* <LineSeries   style={GoalLineStyle} data={Goaldata} /> */}
//           {/* <BarSeries
//             cluster="2016"
//             color="#12939A"
//             data={[
//               {x: 'Q1', y: 3},
//               {x: 'Q2', y: 8},
//               {x: 'Q3', y: 11},
//               {x: 'Q4', y: 19}
//             ]}
//           />
//           <BarSeries
//             cluster="2016"
//             color="#79C7E3"
//             data={[
//               {x: 'Q1', y: 22},
//               {x: 'Q2', y: 2},
//               {x: 'Q3', y: 22},
//               {x: 'Q4', y: 18}
//             ]}
//           // /> */}

          
// const GoalLineStyle={
//   strokeWidth: 4,
//   strokeColor: "red"
//   // color: "red"
// }