import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { Document, Page, pdfjs } from 'react-pdf';

class MyPDFDocument extends Component {
    constructor(props) { //need?
        super(props);    //need?
    }
    render(){
        return(              //myPDF
            <Document file={this.props.file}>
                <Page pageNumber={1}
                onLoadError={console.error}
                />
          </Document>
        );
    }
}

export default MyPDFDocument;