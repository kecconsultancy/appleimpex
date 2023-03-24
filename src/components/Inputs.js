import React from "react";

export function Inputs(props) {
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

export function Selects(props) {
  return (
    <div class="form-group">
      <label for="exampleFormControlSelect1">{props.label}</label>
      <select class="form-control" id="exampleFormControlSelect1">
        {props.option.map((el) => (
          <option>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default Inputs;
