import React, { Component } from "react";
import { Document, Page } from 'react-pdf';

class MyPDFDocument extends Component {
    // constructor(props) { //need?
    //     super(props);    //need?
    // }
    render(){
        return(              //myPDF
            // <Document file={this.props.file}>
            <Document file={require("../images/handout.pdf")}>
                <Page pageNumber={1}
                onLoadError={console.error}
                />
          </Document>
        );
    }
}

export default MyPDFDocument;