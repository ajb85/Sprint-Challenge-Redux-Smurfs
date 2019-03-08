/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const FETCHED_SMURFS = "FETCHED_SMURFS";
export const ADDING_SMURF = "FETCHED_SMURFS";
export const UPDATING_SMURF = "UPDATING_SMURF";
export const DELETING_SMURF = "DELETING_SMURF";
export const FETCH_ERR = "FETCH_ERR";

export const fetchSmurfs = () => dispatch => {
  // Update isFetching state
  dispatch({ type: FETCHING_SMURFS });

  // Get data from server to save to state
  const url = "http://localhost:3333/smurfs";
  axios
    .get(url)
    .then(res => {
      // Dispatch smurf array to save in state
      dispatch({ type: FETCHED_SMURFS, payload: res.data });
    })
    .catch(err => {
      // oh noes, report err to state
      dispatch({ type: FETCH_ERR, payload: err.data });
    });
};

export const addSmurf = smurf => dispatch => {
  // Update isFetching state
  dispatch({ type: ADDING_SMURF });

  // Get data from server to save to state
  const url = "http://localhost:3333/smurfs";
  const { name, age, height } = smurf;
  if (!name || !age || !height) {
    // confirm all data needed is present before sending request
    axios
      .post(url, smurf)
      .then(res => {
        // Dispatch smurf array to save in state
        dispatch({ type: FETCHED_SMURFS, payload: res.data });
      })
      .catch(err => {
        // oh noes, report err to state
        dispatch({ type: FETCH_ERR, payload: err.data });
      });
  } else {
    console.log(
      `Missing Smurf info!:  Name: ${name}, Age: ${age}, Height: ${height}`
    );
  }
};

export const updateSmurf = smurf => dispatch => {
  // Update isFetching state
  dispatch({ type: UPDATING_SMURF });

  // Get data from server to save to state
  const url = `http://localhost:3333/smurfs/${smurf.id}`;

  // confirm all data needed is present before sending request
  axios
    .put(url, smurf)
    .then(res => {
      // Dispatch smurf array to save in state
      dispatch({ type: FETCHED_SMURFS, payload: res.data });
    })
    .catch(err => {
      // oh noes, report err to state
      dispatch({ type: FETCH_ERR, payload: err.data });
    });
};

export const deleteSmurf = smurf => dispatch => {
  // Update isFetching state
  dispatch({ type: DELETING_SMURF });

  // Get data from server to save to state
  const url = `http://localhost:3333/smurfs/${smurf.id}`;

  // confirm all data needed is present before sending request
  axios
    .delete(url)
    .then(res => {
      // Dispatch smurf array to save in state
      dispatch({ type: FETCHED_SMURFS, payload: res.data });
    })
    .catch(err => {
      // oh noes, report err to state
      dispatch({ type: FETCH_ERR, payload: err.data });
    });
};
