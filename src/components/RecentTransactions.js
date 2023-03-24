import React from "react";
import RecentListRows from "./RecentListRows";

function RecentTransactions() {
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
                <RecentListRows
                  customerName="customer 1"
                  count={56}
                  date="11/1/2003"
                  delivered={false}
                  value={450}
                ></RecentListRows>
                <RecentListRows
                  customerName="Customer2"
                  count={56}
                  date="2/1/2003"
                  delivered={false}
                  value={450}
                ></RecentListRows>
                <RecentListRows
                  customerName="Customer3"
                  count={56}
                  date="6/1/2003"
                  delivered={true}
                  value={230}
                ></RecentListRows>
                <RecentListRows
                  customerName="Customer4"
                  count={56}
                  date="8/1/2003"
                  delivered={true}
                  value={450}
                ></RecentListRows>
                <RecentListRows
                  customerName="Customer5"
                  count={56}
                  date="12/1/2003"
                  delivered={true}
                  value={450}
                ></RecentListRows>
                <RecentListRows
                  customerName="Customer5"
                  count={56}
                  date="12/1/2003"
                  delivered={true}
                  value={450}
                ></RecentListRows>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
