import React, { Component } from "react";
import './Movement.css';
// import { Player } from 'video-react';
// import Container from 'react-bootstrap/dist/react-bootstrap'
// import Row from 'react-bootstrap/lib/Row'
// import Col from 'react-bootstrap/lib/Col'
// import TabContainer from 'react-bootstrap/lib/TabContainer'
// import { Table } from "material-ui";
// import { Grid } from "material-ui";

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
      // <div className="Home" >
      <div>
        <div>
          <h1 style={headerStyle}> 
            Movement Library
          </h1>
        </div>
        {/* <div style={{gridRow: }}> */}
        {/* <Grid></Grid> */}
        {/* <Table></Table>
        <TableRow></TableRow> */}
        {/* <Grid 
          container
          direction="row
          "> */}
          {/* <Row> */}
            {/* <Col> */}
            {/* className="boxRow" */}
            {/* <div style={{flexDirection:"row"}} > */}
            <view className= "boxRow">
              <iframe src='https://www.youtube.com/embed/VoA-Hhd5e1U' //have to use embed instead of watch
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
              />
              <p style={pStyle}>
                Seated Dumbell BenchPress
              </p>
              <iframe src='https://www.youtube.com/embed/O-zZAKgj0JY'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
              />
              <p style={pStyle}>
                Dumbell BenchPress
              </p> 
            </view>
            {/* </Col> */}
          {/* </Row> */}
        {/* </Grid> */}
        {/* </div>    */}
      </div>
    );
  }
}


{/* can add width and height to make bigger (make %'s) */}
          {/* width words, but height only extends to the end of "the space it has to fill
            need to make every parent div up to that point height 100% in the .css
            https://stackoverflow.com/questions/38428322/react-component-full-screen-with-height-100" */}

// width="40%"
//actual width is 30

// https://www.youtube.com/watch?v=VoA-Hhd5e1U// bench video
//https://www.youtube.com/channel/UCZCkd8X-fGay6kh4PhQ3wCA //main mitch site

//'https://www.youtube.com/embed/E7wJTI-1dvQ' //stack o video

{/* <Player
            playsInline
            poster="/assets/poster.png"
            src="https://youtu.be/yP7k8eGvymA"
            // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}