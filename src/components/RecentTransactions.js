import React, { useEffect, useState } from "react";
import RecentListRows from "./RecentListRows";
import { getDataFromStorage } from "../utils/functions";

function RecentTransactions() {
  const [CustomerData, setCustomerData] = useState([]);
  useEffect(() => {
    const Orders = getDataFromStorage("AssighTailorList")
      ?.sort((a, b) => a.DeliveryDate - b.DeliveryDate)
      .slice(-5);
    setCustomerData(Orders);
  }, []);

  return (
    <div className="col-xl-8 col-md-6">
      <div className="card Recent-Users">
        <div className="card-header">
          <h5>Recent Transactions</h5>
        </div>
        <div className="card-block px-3 py-3">
          <div className="table-responsive">
            <table className="table table-hover">
              <tbody>
                {/* {
    "FabricName": "",
    "FabricType": "",
    "GSMnumber": "",
    "FabricBuyerName": "",
    "FabricBuyerAddress": "",
    "FabricQuality": "",
    "FabricQuantity": "",
    "DeliveryDate": "",
    "Amount": "100000"
} */}
                {CustomerData.map((el) => (
                  <RecentListRows
                    customerName={el.FabricBuyerName}
                    count={el.Quantity}
                    date={el.DeliveryDate}
                    delivered={false}
                    value={el.Amount}
                  ></RecentListRows>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
