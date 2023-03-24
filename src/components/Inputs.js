import React from "react";

function Inputs(props) {
  return (
    <div class="form-group">
      <label for="exampleInputEmail1">{props.label}</label>
      <input
        type={props.type}
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Inputs;
