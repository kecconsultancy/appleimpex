import React from "react";
import { useState } from "react";
import { Inputs, Selects } from "./Inputs";
export function ParcelForm() {
  const [Name, setName] = useState("");
  const [TeamName, setTeamName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState();
  const submit = () => {
    const parcelerlist = JSON.parse(localStorage.getItem("parcelerlist"));
    console.log(parcelerlist);
    if (!parcelerlist) {
      localStorage.setItem(
        "parcelerlist",
        JSON.stringify([{ Name, TeamName, PhoneNumber }])
      );
    } else {
      parcelerlist.push({ Name, TeamName, PhoneNumber });
      localStorage.setItem("parcelerlist", JSON.stringify(parcelerlist));
    }
  };
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Create Packing</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Product packager Name</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter name"
                          value={Name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        {/* <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small> */}
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">
                          Shop name
                        </label>
                        <input
                          type="name"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Shop name"
                          value={TeamName}
                          onChange={(e) => {
                            setTeamName(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Phone Number</label>
                        <input
                          type="name"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Phone number"
                          value={PhoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                          
                        />
                        
                      <Inputs
                        type="text"
                        placeholder=" Enter Address"
                        label="Address"
                      ></Inputs>
                      </div>
                      <div class="form-group form-check">
                        {/* <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        /> */}
                        {/* <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label> */}
                      </div>
                      <div onClick={(e) => submit()} class="btn btn-primary">
                        Submit
                      </div>
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
                          Exampleaa select
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

export function AssignParsel() {
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Orders with Packing team</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                    <Selects
                        label="Product packager name"
                        option={["name 1", "name 2", "name 3"]}
                      ></Selects>
                    <Inputs
                        type="text"
                        placeholder="Shop name"
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
                        placeholder=" Enter Number of pieces given"
                        label="Pieces"
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder="Enter the total packages"
                        label="Packages"
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
