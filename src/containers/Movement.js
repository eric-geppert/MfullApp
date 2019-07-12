import React, { Component } from "react";
import './Movement.css';
// import { Player } from 'video-react';
import Container from 'react-bootstrap/'
// import Row from 'react-bootstrap/lib/Row'
// import Col from 'react-bootstrap/lib/Col'
// import TabContainer from 'react-bootstrap/lib/TabContainer'
// import { Table } from "material-ui";

const pStyle={
  fontWeight:"bold",
  fontSize: "18px"
}

const headerStyle={
  textAlign: "center",
  fontSize: "40px",
  marginBottom: "50px"
}
 
export default class Movement extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 style={headerStyle}> 
            Movement Library
          </h1>
        </div>
            <div className= "container-of-boxes">
              <div id="seated db bench">
                <iframe src='https://www.youtube.com/embed/VoA-Hhd5e1U' //have to use embed instead of watch
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                  // name="Seated Dumbell BenchPress"
                />
                <p style={pStyle}>
                  Seated Dumbell BenchPress
                </p>
              </div>
              <div id="db bench">
                <iframe src='https://www.youtube.com/embed/O-zZAKgj0JY'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
                <p style={pStyle}>
                  Dumbell BenchPress
                </p> 
              </div>
              <div id="thruster">
                <iframe src='https://www.youtube.com/embed/yP7k8eGvymA'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  title='video'
                />
                <p style={pStyle}>
                  Thruster
                </p> 
              </div>
            </div>
      </div>
    );
  }
}