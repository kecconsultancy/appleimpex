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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
