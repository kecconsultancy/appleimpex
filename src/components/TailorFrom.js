import React, { useState } from "react";
import Inputs, { Selects } from "./Inputs";
import { setDataToStorage } from "../utils/functions";

export function TailorFrom() {
  const [Name, setName] = useState("sd");
  const [ShopName, setShopName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const submit = () => {
    setDataToStorage("TailorList", { Name, ShopName, PhoneNumber, Address });
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
  const [TailorName, setTailorName] = useState("");
  const [ShopName, setShopName] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [SentDate, setSentDate] = useState("");
  const [DeliveryDate, setDeliveryDate] = useState("");
  const [Amount, setAmount] = useState("");
  const SubmitForm = (e) => {
    setDataToStorage("AssighTailorList", {
      TailorName,
      ShopName,
      Number,
      Address,
      Quantity,
      SentDate,
      DeliveryDate,
      Amount,
      status: "PENDING",
    });
  };
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
                        value={TailorName}
                        onChange={(e) => setTailorName(e)}
                      ></Selects>
                      <Inputs
                        type="text"
                        placeholder=" Tailor Shop name"
                        label="Shop name"
                        value={ShopName}
                        onChange={(e) => setShopName(e)}
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Mobile Number"
                        label="Mobile Number"
                        value={Number}
                        onChange={(e) => setNumber(e)}
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder=" Enter Address"
                        label="Address"
                        value={Address}
                        onChange={(e) => setAddress(e)}
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder=" Enter the Quantity"
                        label="Quantity"
                        value={Quantity}
                        onChange={(e) => setQuantity(e)}
                      ></Inputs>
                      <Inputs
                        type="date"
                        placeholder="Enter Sent Date"
                        label="Sent Date"
                        value={SentDate}
                        onChange={(e) => setSentDate(e)}
                      ></Inputs>
                      <Inputs
                        type="date"
                        placeholder="Enter Expected return Date"
                        label="Return Date"
                        value={DeliveryDate}
                        onChange={(e) => setDeliveryDate(e)}
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Enter the Amount"
                        label="Amount"
                        value={Amount}
                        onChange={(e) => setAmount(e)}
                      ></Inputs>

                      <button
                        type="button"
                        onClick={(e) => SubmitForm(e)}
                        class="btn btn-primary"
                      >
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
