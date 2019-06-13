import logger from "redux-logger";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../Reducers/Reducers';
// import goal from '../Reducers/GoalReducer';
// import gym from '../Reducers/GymReducer';

const store = createStore(reducers, applyMiddleware(thunk, logger));
export default store;

// store.subscribe(() => {
//   const state = store.getState();
//   console.log('I dispatched successfully: ', state) //replace with Program.render()
// })
// store.dispatch(updateSelected("gain"));//
