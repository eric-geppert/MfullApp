import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home" >
        <div className="lander">
          <div className="pic">
            <img
                style={{
                  flex: 1,
                  alignSelf: 'stretch',
                  width: "50%",
                  height: undefined,
                }}
                src={require('../images/findMyWorkoutPlan.PNG')}
              />
            </div>
          {/* <div className="info"> */}
            {/* <h1>mission statement:</h1> */}
            <p>Everyone needs a plan in gym. </p>
            <p> Reach your fitness goals with our workout plan database that has plans for all people of all fitness levels </p>
          {/* </div> */}
        </div> 
      </div>
    );
  }
}
        // {/* <ImageBackground source={'../images/findMyWorkoutPlan.PNG'} style={{width: '100%', height: '100%'}}> */}
        // {/* <ImageBackground source={require('../images/findMyWorkoutPlan.PNG')} style={{width: '100%', height: '100%'}}> */}

              
        // <div className="lander" style={backGroundStyle} />
        //   {/* <img src={require('../images/findMyWorkoutPlan.PNG')} width="400" height="400px"/> */}
          
        // </div>
        // // </ImageBackground>

        // {/* <Image
        //     style={{flex:1, height: undefined, width: undefined}}
        //     source={require('../images/findMyWorkoutPlan.PNG')}
        //     resizeMode="contain"
        //   /> */}
