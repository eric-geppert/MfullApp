import workouts from '../../workout.json';
import store from '../Store/Store';

// const gym = (listOfWorkouts=[], action) =>{ //update to actual listOfWorkouts
const gym = (state={}, action) =>{
    console.log("in gym reducer");
    switch(action.type){
        case("UPDATE_GYM"): {
            let tempList= action.payload.currentWorkoutList.filter(workout => 
                (workout.gymtype===action.payload.gymtype) 
            );
            console.log(tempList);
            return tempList;
        }
        default: {
            console.log("defaulted to all workouts")
            return workouts;
    }
  }
}

export default gym;
