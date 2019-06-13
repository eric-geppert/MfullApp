const updateGym = (gymValue,currentList) => {
    return{
        type: "UPDATE_GYM",
        payload: {
            gymtype: gymValue,
            currentWorkoutList: currentList
        }
    }
  }
  
  export default updateGym;