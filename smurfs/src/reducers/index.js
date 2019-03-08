/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCHING_SMURFS,
  FETCHED_SMURFS,
  ADDING_SMURF,
  UPDATING_SMURF,
  DELETING_SMURF,
  FETCH_ERR
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCHED_SMURFS:
      return { ...state, fetchingSmurfs: false, smurfs: [...action.payload] };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case UPDATING_SMURF:
      return { ...state, updatingSmurf: true };
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case FETCH_ERR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
