import React, { useState } from "react";
import Inputs, { Selects } from "./Inputs";
import { setDataToStorage } from "../utils/functions";
export function RingForm() {
  const [RingerName, setRingerName] = useState("");
  const [RingerShopName, setRingerShopName] = useState("");
  const [EyeletName, setEyeletName] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Quality, setQuality] = useState("");
  const [Material, setMaterial] = useState("");
  const [Size, setSize] = useState(1);

  const submit = () => {
    console.log();
    setDataToStorage("EyeletList", {
      RingerName,
      RingerShopName,
      EyeletName,
      Number,
      Address,
      Quality,
      Material,
      Size,
    });
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
                          onChange={(e) => setRingerName(e)}
                          value={RingerName}
                        ></Inputs>

                        <Inputs
                          type="text"
                          placeholder="Enter Ringer Shop name"
                          label="Enter Ringer Shop name"
                          onChange={(e) => setRingerShopName(e)}
                          value={RingerShopName}
                        ></Inputs>
                        <Inputs
                          type="number"
                          placeholder=" Enter phone number"
                          label="Phone Number"
                          value={Number}
                          onChange={(e) => setNumber(e)}
                        ></Inputs>
                        <Inputs
                          type="text"
                          placeholder="Enter Address"
                          label="Address"
                          value={Address}
                          onChange={(e) => setAddress(e)}
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
                        value={EyeletName}
                        onChange={(e) => {
                          setEyeletName(e.target.value);
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
  const [RingerName, setRingerName] = useState("");
  const [shopName, setshopName] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Pices, setPices] = useState("");
  const [SentDate, setSentDate] = useState("");
  const [DeliveryDate, setDeliveryDate] = useState("");
  const [Amount, setAmount] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    setDataToStorage("AssignRingerList", {
      RingerName,
      shopName,
      Number,
      Address,
      Pices,
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
                <h5>Orders with Ringer</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <Selects
                        label="Ringer Name"
                        option={["Ringer 1", "Ringer 2", "Tailor 3"]}
                        value={RingerName}
                        onChange={(e) => setRingerName(e)}
                      ></Selects>
                      <Inputs
                        type="text"
                        placeholder=" Riger Shop name"
                        label="Shop name"
                        value={shopName}
                        onChange={(e) => setshopName(e)}
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
                        placeholder=" Number of pieces given"
                        label="Pieces"
                        value={Pices}
                        onChange={(e) => setPices(e)}
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
                        type="submit"
                        onClick={(e) => submitForm(e)}
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
