import React, { useState } from "react";
import { Inputs, Selects } from "./Inputs";
import { setDataToStorage } from "../utils/functions";

export function OrderForm() {
  const [FabricName, setFabricName] = useState("");
  const [FabricType, setFabricType] = useState("");
  const [GSMnumber, setGSMnumber] = useState("");
  const [FabricBuyerName, setFabricBuyerName] = useState("");
  const [FabricBuyerAddress, setFabricBuyerAddress] = useState("");
  const [FabricQuality, setFabricQuality] = useState("");
  const [FabricQuantity, setFabricQuantity] = useState("");
  const [DeliveryDate, setDeliveryDate] = useState("");
  const [Amount, setAmount] = useState("");
  const SubmitForm = (e) => {
    e.preventDefault();
    setDataToStorage("OrderList", {
      FabricName,
      FabricType,
      GSMnumber,
      FabricBuyerName,
      FabricBuyerAddress,
      FabricQuality,
      FabricQuantity,
      DeliveryDate,
      Amount,
      status: "PENDING",
    });
    setDataToStorage("TransactionList", {
      amount: Math.abs(parseInt(Amount)),
      date: new Date(),
    });
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
                      <Selects
                        label="Fabric name"
                        option={[
                          "Fabric name 1 ",
                          "Fabric name 2",
                          "Fabric name 3",
                          "Fabric name 4",
                        ]}
                        value={FabricName}
                        onChange={(e) => setFabricName(e)}
                      ></Selects>
                      <Selects
                        label="Fabric Type"
                        option={[
                          "Fabric name 1 ",
                          "Fabric name 2",
                          "Fabric name 3",
                          "Fabric name 4",
                        ]}
                        value={FabricType}
                        onChange={(e) => setFabricType(e)}
                      ></Selects>

                      <Inputs
                        type="number"
                        placeholder="GSM Number"
                        label="GSM Number"
                        value={GSMnumber}
                        onChange={(e) => setGSMnumber(e)}
                      ></Inputs>
                      <Selects
                        label="Fabric Buyer name"
                        option={["Buyer 1", "Buyer 2", "Buyer 3", "Buyer 4"]}
                        value={FabricBuyerName}
                        onChange={(e) => setFabricBuyerName(e)}
                      ></Selects>
                      <Selects
                        label="Fabric Buyer Address"
                        option={["Buyer 1", "Buyer 2", "Buyer 3", "Buyer 4"]}
                        value={FabricBuyerAddress}
                        onChange={(e) => setFabricBuyerAddress(e)}
                      ></Selects>
                      <Selects
                        label="Quality"
                        option={["Low", "Medium", "High"]}
                        value={FabricQuality}
                        onChange={(e) => setFabricQuality(e)}
                      ></Selects>
                      <Inputs
                        type="number"
                        placeholder=" Quantity"
                        label="Quantity"
                        value={FabricQuantity}
                        onChange={(e) => setFabricQuantity(e)}
                      ></Inputs>
                      <Inputs
                        type="date"
                        placeholder="Date"
                        label="Date"
                        value={DeliveryDate}
                        onChange={(e) => setDeliveryDate(e)}
                      ></Inputs>
                      <Inputs
                        type="number"
                        placeholder=" Amount"
                        label="Amount in Rupees"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
