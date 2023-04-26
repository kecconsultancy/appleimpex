import React, { useState } from "react";

export function CustomerForm() {
  const [Name, setName] = useState("sd");
  const [ShopName, setShopName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Address, setAddress] = useState("");
  const submit = () => {
    const CustomerList = JSON.parse(localStorage.getItem("CustomerList"));
    console.log(CustomerList);
    if (!CustomerList) {
      localStorage.setItem(
        "CustomerList",
        JSON.stringify([{ Name, ShopName, PhoneNumber, Address }])
      );
    } else {
      CustomerList.push({ Name, ShopName, PhoneNumber, Address });
      localStorage.setItem("CustomerList", JSON.stringify(CustomerList));
    }
  };
  return (
    <div class="main-body">
      <div class="page-wrapper">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Create Customer</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <form>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Customer Name</label>
                        <input
                          type="Customer Name"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Customer Name"
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
                        <label for="exampleInputEmail1">Shop Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter  Shop Nmae"
                          value={ShopName}
                          onChange={(e) => {
                            setShopName(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">
                          Customer Phone Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter  Phone Number"
                          value={PhoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Address</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Address"
                          value={Address}
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </div>
                      <div class="btn btn-primary" onClick={(e) => submit()}>
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
export function EditCustomer() {
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
