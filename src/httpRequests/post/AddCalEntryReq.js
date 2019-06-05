// import React from "react";

export default function AddCalEntry(calorieState, dateState) 
{
  console.log("calorieState: " + calorieState);
  console.log("dateState: " + dateState);

  fetch('/calorie/addCalEntry', {port:8080}, {
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