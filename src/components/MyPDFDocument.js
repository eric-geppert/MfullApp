import React, { Component } from "react";
import { Document, Page } from 'react-pdf';

class MyPDFDocument extends Component {

    renderSwitch(param) {
        switch(param) {
          case '../images/workouts/AtHomeTotalBody5V1.pdf':{
            return(
                require('../images/workouts/AtHomeTotalBody5V1.pdf')
            )
          }
          case '../images/workouts/AtHomeTotalBody4V1.pdf':{
            return(
                require('../images/workouts/AtHomeTotalBody4V1.pdf')
            )
          }
          case '../images/workouts/AtHomeTotalBody3V1.pdf':{
            return(
                require('../images/workouts/AtHomeTotalBody3V1.pdf')
            )
          }
          case '../images/workouts/ConditioningWeightLoss5V1.pdf':{
            return(
                require('../images/workouts/ConditioningWeightLoss5V1.pdf')
            )
          }
          case '../images/workouts/ConditioningWeightLoss4V1.pdf':{
            return(
                require('../images/workouts/ConditioningWeightLoss4V1.pdf')
            )
          }
          case '../images/workouts/ConditioningWeightLoss3V1.pdf':{
            return(
                require('../images/workouts/ConditioningWeightLoss3V1.pdf')
            )
          }
          default:
            console.log("degault was loaded from param: "+param);
            return 'error';
        }
      }
      
    /**require doesn't allow you to render documents dynamically,
     * therefore had to make a massive switch statement.
     */
    render(){
        return(
            <div>
                <Document key={this.props.testKey} file={this.renderSwitch(this.props.file)}>
                    <Page pageNumber={1}
                    onLoadError={console.error}
                    />
                </Document>
            </div>
        );
    }
}

export default MyPDFDocument;