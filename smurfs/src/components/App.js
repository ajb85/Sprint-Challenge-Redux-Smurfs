import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs, updateSmurf, deleteSmurf } from "../actions";
import AddSmurf from "./AddSmurf";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
function App(props) {
  useEffect(() => {
    // basically componentDidMount
    props.fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <AddSmurf />
      {props.smurfs.map(smurf => (
        <div key={smurf.id}>
          <h2>
            {smurf.name}, {smurf.age}
          </h2>
          <p>{smurf.height}</p>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
});

/*

*/

export default connect(
  mapStateToProps,
  { fetchSmurfs, updateSmurf, deleteSmurf }
)(App);
