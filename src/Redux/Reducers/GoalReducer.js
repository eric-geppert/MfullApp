import workouts from '../../workout.json'
import store from '../Store/Store';

//store.getState()
// const goal = (listOfWorkouts=[], action) =>{
const goal = (state={}, action) =>{
    switch(action.type){
        case("UPDATE_SELECTED"): {
            //workouts.filter
            return action.payload.currentWorkoutList.filter(workout => 
                (workout.goal===action.payload.goal)
                //add null case
            );
        }
        default: return workouts;
    }
  }


export default goal;
