import React from "react";
import CardProfiltLoss from "../components/CardProfiltLoss";
import RecentTransactions from "../components/RecentTransactions";
import TranactionsList from "../components/TranactionsList";
import UpcommingOrders from "../components/UpcommingOrders";

function Dashboard() {
  return (
    <div className="pcoded-main-container">
      <div className="pcoded-wrapper">
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                <div className="row">
                  <CardProfiltLoss
                    title={"Weakly Sales"}
                    amount={100}
                    percentage={34}
                  ></CardProfiltLoss>

                  <CardProfiltLoss
                    title={"Monthly Sales"}
                    amount={902}
                    percentage={11}
                  ></CardProfiltLoss>

                  <CardProfiltLoss
                    title={"Yearly Sales"}
                    amount={-890}
                    percentage={32}
                  ></CardProfiltLoss>

                  <RecentTransactions></RecentTransactions>

                  <UpcommingOrders
                    numberOfOrderes={2}
                    percentage={56}
                    totalInStock={45}
                    StocksNeeded={304}
                  ></UpcommingOrders>

                  <TranactionsList></TranactionsList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
