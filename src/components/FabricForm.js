import React, { useState } from "react";
import Inputs, { Selects } from "./Inputs";

export function FabricForm() {
  const [Name, setName] = useState("");
  const [Quality, setQuality] = useState("");
  const [Material, setMaterial] = useState("");
  const [GSM, setNumber] = useState(1);
  const submit = () => {
    console.log();
    const fabricData = JSON.parse(localStorage.getItem("fabricList"));
    console.log(fabricData);
    if (!fabricData) {
      localStorage.setItem(
        "fabricList",
        JSON.stringify([{ Name, Quality, Material, GSM }])
      );
    } else {
      fabricData.push({ Name, Quality, Material, GSM });
      localStorage.setItem("fabricList", JSON.stringify(fabricData));
    }
  };
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Create Fabric</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Fabric Name</label>
                        <input
                          type="name"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter  Fabric Name"
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
                        <label for="mat1">Material Type</label>
                        <input
                          type="text"
                          class="form-control"
                          id="mat1"
                          aria-describedby="emailHelp"
                          placeholder="material "
                          value={Material}
                          onChange={(e) => {
                            setMaterial(e.target.value);
                          }}
                        />
                        {/* <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small> */}
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Quality</label>
                        {/* <input
                          type="Ouality"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder="Quality "
                        /> */}
                      </div>
                      <div class="form-group form-check">
                        <input
                          type="radio"
                          class="form-check-input"
                          id="exampleCheck1"
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
                        <label for="exampleInputEmail1">GSM Number</label>
                        <input
                          type="number"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Gsm "
                          value={GSM}
                          onChange={(e) => {
                            setNumber(e.target.value);
                          }}
                        />
                        {/* <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small> */}
                      </div>

                      <div onClick={(e) => submit()} class="btn btn-primary">
                        Submit
                      </div>
                    </form>
                  </div>
                  {/* <div class="col-md-6"> */}
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
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AddFabric() {
  const [FabricName, setFabricName] = useState("");
  const [FabricType, setFabricType] = useState("");
  const [GSNNumber, setGSNNumber] = useState();
  const [FabricExportName, setFabricExportName] = useState("");
  const [FabricQuality, setFabricQuality] = useState("");
  const [DeliveryDate, setDeliveryDate] = useState();
  const [Amount, setAmount] = useState();
  const submitForm = () => {
    const FabricOrderList = JSON.parse(localStorage.getItem("FabricOrderList"));
    console.log(FabricOrderList);
    if (!FabricOrderList) {
      localStorage.setItem(
        "FabricOrderList",
        JSON.stringify([
          {
            FabricName,
            FabricType,
            GSNNumber,
            setFabricExportName,
            DeliveryDate,
            Amount,
          },
        ])
      );
    } else {
      FabricOrderList.push({
        FabricName,
        FabricType,
        GSNNumber,
        setFabricExportName,
        DeliveryDate,
        Amount,
      });
      localStorage.setItem("FabricOrderList", JSON.stringify(FabricOrderList));
    }
  };
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Create Order</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <Inputs
                        type="text"
                        placeholder="Fabric Name"
                        label="Fabric name"
                        value={FabricName}
                        onChange={(value) => setFabricName(value)}
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder="Fabric Type"
                        label="Fabric Type"
                        value={FabricType}
                        onChange={(value) => setFabricType(value)}
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder="GSM Number"
                        label="GSM Number"
                        value={GSNNumber}
                        onChange={(value) => setGSNNumber(value)}
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder="Fabric export name"
                        label="Fabric export name"
                        value={FabricExportName}
                        onChange={(value) => setFabricExportName(value)}
                      ></Inputs>
                      <Selects
                        label="Quality"
                        option={["Low", "Medium", "High"]}
                      ></Selects>
                      <Inputs
                        type="date"
                        placeholder="Date"
                        label="Date"
                        value={DeliveryDate}
                        onChange={(value) => setDeliveryDate(value)}
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Amount"
                        label="Amount in Rupees"
                        value={Amount}
                        onChange={(value) => setAmount(value)}
                      ></Inputs>
                      <div
                        onClick={(e) => submitForm()}
                        class="btn btn-primary"
                      >
                        Submit
                      </div>
                    </form>
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
