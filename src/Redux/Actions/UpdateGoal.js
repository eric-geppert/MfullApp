// import UPDATE_SELECTED from './ActionTypes'

// const UPDATE_SELECTED="UPDATE_SELECTED";

//change file names later
const updateSelected = (goalValue,currentList) => {
  return{
      type: "UPDATE_SELECTED",
      payload: {
          goal: goalValue,
          currentWorkoutList: currentList
      }
  }
}

export default updateSelected;