import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../../actions";

function AddSmurf(props) {
  const [name, updateName, clearName] = useInput();
  const [age, updateAge, clearAge] = useInput();
  const [height, updateHeight, clearHeight] = useInput();

  const onSubmitNewSmurf = e => {
    e.preventDefault();
    props.addSmurf({ name, age, height });
    clearName();
    clearAge();
    clearHeight();
  };
  return (
    <form onSubmit={onSubmitNewSmurf}>
      <span>Name</span>
      <input type="text" value={name} onChange={e => updateName(e)} />
      <span>Age</span>
      <input type="number" value={age} onChange={e => updateAge(e)} />
      <span>Height</span>
      <input type="text" value={height} onChange={e => updateHeight(e)} />
      <button type="submit">Submit</button>
    </form>
  );
}

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const updateValue = e => {
    setValue(e.target.value);
  };
  const clearValue = () => {
    setValue("");
  };
  return [value, updateValue, clearValue];
};

const mapStateToProps = state => ({
  addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);
