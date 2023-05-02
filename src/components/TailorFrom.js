import React, { useState } from "react";
import Inputs, { Selects } from "./Inputs";


export function TailorFrom() {
  const [Name, setName] = useState("sd");
  const [ShopName, setShopName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const submit = () => {
    const TailorList = JSON.parse(localStorage.getItem("TailorList"));
    console.log(TailorList);
    if (!TailorList) {
      localStorage.setItem(
        "TailorList",
        JSON.stringify([{ Name, ShopName, PhoneNumber, Address }])
      );
    } else {
      TailorList.push({ Name, ShopName, PhoneNumber, Address });
      localStorage.setItem("TailorList", JSON.stringify(TailorList));
    }
  };
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Create Tailor</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Tailor Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Tailor Name"
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
                          Tailor Shop Name
                        </label>
                        <input
                          type="name"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Shop Name "
                          value={ShopName}
                          onChange={(e) => {
                            setShopName(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Mobile Number</label>
                        <input
                          type="name"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Mobile Number  "
                          value={PhoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input
                          type="name"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Enter Address"
                          value={Address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </div>
                      {/* <div class="form-group form-check">
                        <input
                          type="checkbox"
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

export function AssignTailor() {
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Orders with Tailor</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                    <Selects
                        label="Tailor Name"
                        option={["Tailor 1", "Tailor 2", "Tailor 3"]}
                      ></Selects>
                    <Inputs
                        type="text"
                        placeholder=" Tailor Shop name"
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
                        placeholder=" Enter the Quantity"
                        label="Quantity"
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
