import React, { useState } from "react";
import { Inputs, Selects } from "./Inputs";

export function OrderForm() {
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
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder="Fabric Type"
                        label="Fabric Type"
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder="GSM Number"
                        label="GSM Number"
                      ></Inputs>
                      <Inputs
                        type="text"
                        placeholder="Fabric export name"
                        label="Fabric export name"
                      ></Inputs>
                      <Selects
                        label="Quality"
                        option={["Low", "Medium", "High"]}
                      ></Selects>
                      <Inputs
                        type="date"
                        placeholder="Date"
                        label="Date"
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Amount"
                        label="Amount in Rupees"
                      ></Inputs>
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
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
export function EditOrder() {
  const [fabricName, setFabricName] = useState("");
  const [GSMNumber, setGSMNumber] = useState("");

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
                      <Selects
                        label="Fabric name"
                        option={[
                          "Fabric name 1 ",
                          "Fabric name 2",
                          "Fabric name 3",
                          "Fabric name 4",
                        ]}
                        value={fabricName}
                        onChange={setFabricName}
                      ></Selects>
                      <Selects
                        label="Fabric type"
                        option={[
                          "Fabric type 1 ",
                          "Fabric Type 2",
                          "Fabric Type 3",
                          "Fabric Type 4",
                        ]}
                      ></Selects>
                      <Inputs
                        type="number"
                        placeholder="GSM Number"
                        label="GSM Number"
                        value={GSMNumber}
                        onChange={setGSMNumber}
                      ></Inputs>
                      <Selects
                        label="Fabric Buyer name"
                        option={["Buyer 1", "Buyer 2", "Buyer 3", "Buyer 4"]}
                      ></Selects>
                      <Inputs
                        type="text"
                        placeholder="Address"
                        label="Buyer Address"
                      ></Inputs>
                      <Selects
                        label="Quality"
                        option={["Low", "Medium", "High"]}
                      ></Selects>
                      <Inputs
                        type="number"
                        placeholder=" Quantity"
                        label="Quantity"
                      ></Inputs>
                      <Inputs
                        type="date"
                        placeholder="Date"
                        label="Date"
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Amount"
                        label="Amount in Rupees"
                      ></Inputs>

                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
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
