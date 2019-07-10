import React, { Component } from "react";
import { Player } from 'video-react';

    
 
export default class Movement extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1> 
            Movement Library
          </h1>
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://youtu.be/yP7k8eGvymA"
            // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
      </div>
    );
  }
}