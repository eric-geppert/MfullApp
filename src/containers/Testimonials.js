import React, { Component } from "react";
// import "./Testimonials.css";

const style1= {
  marginLeft: "100px",
  marginRight: "100px",
}
export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Testimonials</h1>
          <div className="indent" style={style1}>
            <p style={{paddingTop:"50px"}}>
            “I wanted a more personalized experience to better hit my goals. Since starting...
            I have lost 30lbs and about 10% body fat, which has been amazing because those were 
            the two things I cared the most about losing. He goes out of his way to help you 
            reach your goals and he's always motivating you to go past your goals and set new ones!”
            -Aaidan Hebert
            </p>
            <p style={{paddingTop:"50px"}}>
              “I was able to dramatically improve my cardio while getting stronger. It’s a great 
              experience...if you do everything you are supposed to, you will get results.”
              -Chase Dolfi
            </p>
            <p style={{paddingTop:"50px"}}>
              “Mitch is an excellent coach and will put in time for any questions you might have. 
              He knows what he is talking about and will help you produce.” -Colton Taylor
            </p>
          </div>

        </div>
      </div>
    );
  }
}