import React, { Component } from "react";
import { Document, Page } from 'react-pdf';

class MyPDFDocument extends Component {
    render(){
        return(
            <Document file={require("../images/handout.pdf")}>
                <Page pageNumber={1}
                onLoadError={console.error}
                />
          </Document>
        );
    }
}

export default MyPDFDocument;