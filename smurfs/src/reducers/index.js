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
  UPDATE_SMURF,
  DELETE_SMURF
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
      return { ...state, fetchSmurfs: true };
    case FETCHED_SMURFS:
      return { ...state, fetchSmurfs: false, smurfs: [...action.payload] };
    case UPDATE_SMURF:
      let updated, i;
      state.smurfs.forEach((smurf, index) => {
        // Could pass the index through the actions but this feels safer
        if (action.payload.id === smurf.id) {
          // Match action's id to a smurf then update it
          updated = action.payload;
          i = index;
        }
      });
      return {
        ...state,
        smurfs: [
          ...state.smurfs.slice(0, i),
          updated,
          ...state.smurfs.slice(i + 1)
        ]
      };
    case DELETE_SMURF:
      // Doing it the other, potentially riskier way here :D
      return {
        ...state,
        smurfs: [
          ...state.smurfs.slice(0, action.payload),
          ...state.smurfs.slice(action.payload + 1)
        ]
      };
  }
};
