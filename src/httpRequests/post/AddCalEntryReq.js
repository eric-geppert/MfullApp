// import React from "react";

export default function AddCalEntry(calorieState, dateState) 
{
  console.log("calorieState: " + calorieState);
  console.log("dateState: " + dateState);

  fetch('http://localHost:8080/calorie/addCalEntry', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("token")
    },
    body: JSON.stringify({
      "calories": calorieState,
      "date": dateState
    })
  })
}