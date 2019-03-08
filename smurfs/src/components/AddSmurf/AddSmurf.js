import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../../actions";

function AddSmurf(props) {
  const [name, updateName] = useInput();
  const [age, updateAge] = useInput();
  const [height, updateHeight] = useInput();

  const onSubmitNewSmurf = e => {
    e.preventDefault();
    props.addFriend({ name, age, height });
  };
  return (
    <form onSubmit={onSubmitNewSmurf}>
      <span>Name</span>
      <input type="text" value={name} onChange={e => updateName(e)} />
      <span>Age</span>
      <input type="number" value={age} onChange={e => updateAge(e)} />
      <span>Email</span>
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
  return [value, updateValue];
};

const mapStateToProps = state => ({
  addingSmurf: state.addingSmurf
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);
