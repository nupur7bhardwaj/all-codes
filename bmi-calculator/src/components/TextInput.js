import React from "react";


const TextInput = (props) => {
  return (
    <div className ="TextInput">
      <label>{props.label}</label>
      <input
        type="number"
        value={props.value}
        //placeholder={props.placeholder}    // ask ?
        onChange={props.handleChange}
      />
    </div>
  );
};

export default TextInput;
