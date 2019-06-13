// import goal from './GoalReducer';
// import gym from './GymReducer';
// import { combineReducers } from 'redux';

// const myReducers=combineReducers({goal:goal},{gym:gym});
// const myReducers=combineReducers(goal, gym);

// export default myReducers;

import workouts from '../../workout.json'
// import store from '../Store/Store';

//initial state passed
const goal = (state={currentWorkoutList: workouts, goal: null}, action) =>{ //whats the right way to set currList state=filtered List?
    // console.log("stateeeeeeeeeeeeeeeeeee", state);
    switch(action.type){
        case("UPDATE_SELECTED"): {
            //workouts.filter
            // const temp=action.payload.currentWorkoutList;
            // temp.filter(workout => (workout.goal===action.payload.goal));
            // store.dispatch()
            if(action.payload.currentWorkoutList!=null){
                console.log("currentWorkoutList is nullllll why is it freaking nullllll")
                return {
                    ...state,
                    currentWorkoutList: workouts,
                };
            }
            else{
                const filteredList=
                action.payload.currentWorkoutList.filter(workout => 
                    (workout.goal===action.payload.goal)
                    //then dispatch currentWorkoutList=new currentWorkoutList 
                    //add null case
                );
                // return action.payload.currentWorkoutList; //change
                return {
                    ...state,
                    currentWorkoutList: filteredList,
                    goal: action.payload.goal,
                    // gym: ???
                    // height: action.height,
                    // cells: newCells
                };
            }
        }
        case("UPDATE_GYM"): {
            action.payload.currentWorkoutList= 
            action.payload.currentWorkoutList.filter(workout => 
                (workout.gymtype===action.payload.gymtype) 
            );
            console.log(action.payload.currentWorkoutList);
            return action.payload.currentWorkoutList;
        }
        default: return workouts; //change to filteredlist in store.getState
    }
  }


export default goal;
