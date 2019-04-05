const setValue = (goal) => {
    return{
        type: "SET_VALUE",
        payload: {
            value: goal
        }
    }
  }
  
  export default setValue;