import React, { Component } from 'react';
import './App.css';
import TopMenu from './TopMenu'
import Background from './images/background_image.png';
// import classNames from 'classnames';

// import ListItemComposition from './ListItemComposition'
// import SimpleMenu from './SimpleMenu'

var sectionStyle = {
  width: "100%",
  height: "800px", //was 400
  // backgroundImage: `url(${Background})`
};

class App extends Component {
  render() {
    return (
      <div label="1.1.1.1.1" style={sectionStyle}>
        <TopMenu/>
      </div>

      //style={{flex: 1}} //doesn't work 
      // <div style={{height: 800}}>
      //   <ListItemComposition/>
      // </div>
      // <div  style={{height: 1000}}> //this works
      // {/* className="App" */}
      //   <topMenu/>
      // </div>
    );
  }
}

export default App;
