// import React, { Component } from "react";
// import {
//   Button,
//   HelpBlock,
//   FormGroup,
//   FormControl,
//   ControlLabel
// } from "react-bootstrap";
// // import Button from '@material-ui/core/Button';

// // import LoaderButton from "../components/LoaderButton";
// // import  Button from "react-bootstrap";

// // import Button from 'react-bootstrap/Button';
// import "./Signup.css";

// export default class Signup extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: false,
//       email: "",
//       password: "",
//       confirmPassword: "",
//       confirmationCode: "",
//       newUser: null
//     };
//   }

//   validateForm() {
//     return (
//       this.state.email.length > 0 &&
//       this.state.password.length > 0 &&
//       this.state.password === this.state.confirmPassword
//     );
//   }

//   validateConfirmationForm() {
//     return this.state.confirmationCode.length > 0;
//   }

//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   }

//   handleSubmit = async event => {
//     event.preventDefault();

//     this.setState({ isLoading: true });

//     this.setState({ newUser: "test" });

//     this.setState({ isLoading: false });
//   }

//   handleConfirmationSubmit = async event => {
//     event.preventDefault();

//     this.setState({ isLoading: true });
//   }

//   renderConfirmationForm() {
//     return (
//       <form onSubmit={this.handleConfirmationSubmit}>
//         <FormGroup controlId="confirmationCode" bsSize="large">
//           <ControlLabel>Confirmation Code</ControlLabel>
//           <FormControl
//             autoFocus
//             type="tel"
//             value={this.state.confirmationCode}
//             onChange={this.handleChange}
//           />
//           <HelpBlock>Please check your email for the code.</HelpBlock>
//         </FormGroup>
//         {/* <LoaderButton */}
//         <Button
//           // block
//           bsSize="large"
//           disabled={!this.validateConfirmationForm()}
//           // type="submit"
//           // isLoading={this.state.isLoading}
//           // text="Verify"
//           // loadingText="Verifying…"
//         />
//       </form>
//     );
//   }

//   renderForm() {
//     return (
//       <div>
//         cool text
//       {/* <Button/> */}

//       <form onSubmit={this.handleSubmit}>
//         <FormGroup controlId="email" bsSize="large">
//           <ControlLabel>Email</ControlLabel>
//           <FormControl
//             autoFocus
//             type="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//           />
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <ControlLabel>Password</ControlLabel>
//           <FormControl
//             value={this.state.password}
//             onChange={this.handleChange}
//             type="password"
//           />
//         </FormGroup>
//         <FormGroup controlId="confirmPassword" bsSize="large">
//           <ControlLabel>Confirm Password</ControlLabel>
//           <FormControl
//             value={this.state.confirmPassword}
//             onChange={this.handleChange}
//             type="password"
//           />
//         </FormGroup>
//         <FormGroup controlId="confirmPassword" bsSize="large">
//           <ControlLabel>test</ControlLabel>
//           <FormControl
//             value={this.state.confirmPassword}
//             onChange={this.handleChange}
//             type="password"
//           />
//         </FormGroup>
//         {/* <LoaderButton */}
        
//         <Button
//         // // children
//         // //   block
        
//         //   bsSize="large"
//         // //   disabled={!this.validateForm()}
//         // //   type="submit"
//         // //   isLoading={this.state.isLoading}
//         //   text="Signup"
//         // //   loadingText="Signing up…"
//         variant="contained" color="primary" 
//         >
//         </Button>
//       </form>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="Signup" style={{flex:1}}>
//         {this.state.newUser === null
//           ? this.renderForm()
//           : this.renderConfirmationForm()}
//       </div>
//     );
//   }
// }
