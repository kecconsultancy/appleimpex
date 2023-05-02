import React, { useState } from "react";
import Inputs, { Selects } from "./Inputs";
export function RingForm() {
  const [Name, setName] = useState("");
  const [Quality, setQuality] = useState("");
  const [Material, setMaterial] = useState("");
  const [Size, setSize] = useState(1);
  const submit = () => {
    console.log();
    const EyeletList = JSON.parse(localStorage.getItem("EyeletList"));
    console.log(EyeletList);
    if (!EyeletList) {
      localStorage.setItem(
        "EyeletList",
        JSON.stringify([{ Name, Quality, Material, Size }])
      );
    } else {
      EyeletList.push({ Name, Quality, Material, Size });
      localStorage.setItem("EyeletList", JSON.stringify(EyeletList));
    }
  };
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Create Eyelet</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <div class="form-group">
                        
                        <Inputs
                        type="text"
                        placeholder="Enter Ringer name"
                        label="Ringer name"
                        ></Inputs>
                        
                      <Inputs
                        type="text"
                        placeholder="Enter Ringer Shop name"
                        label="Enter Ringer Shop name"
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Enter phone number"
                        label="Phone Number"
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder="Enter Address"
                        label="Address"
                      ></Inputs>
                        {/* <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small> */}
                      </div>
                      <label for="exampleInputEmail1">Eyelet Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Eyelet Name"
                          value={Name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}  
                        />
                      <div class="form-group form-check">
                        <label>Quality</label>
                        <br></br>
                        <input
                          type="radio"
                          class="form-check-input"
                          id="exampleCheck1"
                          value={Quality}
                          onChange={(e) => {
                            setQuality(e.target.value);
                          }}
                        />

                        <label class="form-check-label" for="exampleCheck1">
                          Low
                        </label>
                        <br></br>
                        <input
                          type="radio"
                          class="form-check-input"
                          id="exampleCheck1"
                        />

                        <label class="form-check-label" for="exampleCheck1">
                          Medium
                        </label>
                        <br></br>
                        <input
                          type="radio"
                          class="form-check-input"
                          id="exampleCheck1"
                        />

                        <label class="form-check-label" for="exampleCheck1">
                          High
                        </label>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Size</label>
                        <input
                          type="number"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Size"
                          value={Size}
                          onChange={(e) => {
                            setSize(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Material</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Material"
                          value={Material}
                          onChange={(e) => {
                            setMaterial(e.target.value);
                          }}
                        />
                      </div>
                      {/* <div class="form-group form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div> */}
                      <div onClick={(e) => submit()} class="btn btn-primary">
                        Submit
                      </div>
                    </form>
                  </div>
                  {/* <div class="col-md-6">
                    <form>
                      <div class="form-group">
                        <label>Text</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Text"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          Example select
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </form> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export function AssingRing() {
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Orders with Ringer</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                    <Selects
                        label="Ringer Name"
                        option={["Ringer 1", "Ringer 2", "Tailor 3"]}
                      ></Selects>
                    <Inputs
                        type="text"
                        placeholder=" Riger Shop name"
                        label="Shop name"
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Mobile Number"
                        label="Mobile Number"
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder=" Enter Address"
                        label="Address"
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder=" Number of pieces given"
                        label="Pieces"
                      ></Inputs>
                      <Inputs
                        type="date"
                        placeholder="Enter Sent Date"
                        label="Sent Date"
                      ></Inputs>
                      <Inputs
                        type="date"
                        placeholder="Enter Expected return Date"
                        label="Return Date"
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Enter the Amount"
                        label="Amount"
                      ></Inputs>
                      
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                  <div class="col-md-6">
                    {/* <form>
                      <div class="form-group">
                        <label>Text</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Text"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">
                          Example select
                        </label>
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
