import React from "react";
import './CalorieGraph.css';
import {
    FlexibleXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend,
} from 'react-vis';

const tempBlueData=[];
const tempRedData=[];
const endCals=[];


export default class CalorieGraph extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      height: 0,
      width: 0,
      useCanvas: false,
      blueData: [],
      redData:[],
    }
  }

  getCalsBetween = () =>{
    try {     
      fetch('40.113.216.49:8080/calorie/getEntriesBetween', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem("token")
        },
      
        body: JSON.stringify({
          "start": this.props.startDate,
	        "end": this.props.endDate
        })
      }).then((response) => response.json())  
      .then( json=> {
        json.forEach(entry => {
          endCals.push({x: entry.date, y: entry.calories});
        });
        this.overUnder(endCals,parseInt(this.props.goal,10)); 
        /**was taking goal in as a string which was giving weird output */
      })
    } catch (e) {
      alert(e.message);
    }
  }
  overUnder = (entries,goal) =>{
    for(let i=0; i<entries.length; i++){
      if(entries[i].y>goal){
        tempBlueData.push({x: entries[i].x, y: goal}); //cut off at goal
        tempRedData.push({x: entries[i].x, y: entries[i].y-goal});
      }
      else if(goal>entries[i].y){
        tempBlueData.push({x: entries[i].x, y: entries[i].y});
      }
      else if(goal===entries[i].y){
        tempBlueData.push({x: entries[i].x, y: goal});
      }
      else 
        console.error("error in overUnder function");
    }
    this.setState({blueData:tempBlueData, redData: tempRedData })
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.getCalsBetween();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  };

  render() {
    const {useCanvas} = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    
    return (
      <div className="top XYplot" >
          <div className="goal">
            <h1>
              Your goal is: {this.props.goal} calories per day
            </h1>
          </div>
        <FlexibleXYPlot
          xType="ordinal"
          stackBy="y"
          margin={{ top: 100, left: 100, right: 100, bottom: 100 }}
          width= {this.state.width}
          height= {this.state.height-200}
        >
          <DiscreteColorLegend
            style={{left: '50px', top: '10px'}}
            orientation="horizontal"
            items={[
              {
                title: 'Calories over your goal',
                color: 'red'
              },
              {
                title: 'Calories under your goal',
                color: '#79C7E3'
              }
            ]}
          />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <BarSeries
            cluster="2019"
            color="#79C7E3"
            data={this.state.blueData}
          />
          <BarSeries
            cluster="2019"
            color = "red"
            data={this.state.redData}
          />
        </FlexibleXYPlot>
      </div>
    );
  }
}