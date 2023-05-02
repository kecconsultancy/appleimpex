import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProfiltLoss from "../components/CardProfiltLoss";
import RecentTransactions from "../components/RecentTransactions";
import TranactionsList from "../components/TranactionsList";
import UpcommingOrders from "../components/UpcommingOrders";

function Dashboard() {
  const [Weekly, setWeekly] = useState({ amount: 0, percentage: 0 });
  const [Monthly, setMonthly] = useState({ amount: 0, percentage: 0 });
  const [Yearly, setYearly] = useState({ amount: 0, percentage: 0 });
  const SetData = (data, setter) => {
    let totalAmount = 0;
    const storage = { amount: 0, percentage: 0 };

    data.forEach((el) => {
      storage.amount += el.amount;
      totalAmount += Math.abs(el.amount);
    });
    console.log(totalAmount);
    storage.percentage = (Math.abs(storage.amount) / totalAmount) * 100;
    setter(storage);
  };
  useEffect(() => {
    const TransactionList = JSON.parse(localStorage.getItem("TransactionList"));
    if (!TransactionList) {
    } else {
      var today = new Date();
      var oneWeekAgo = new Date();
      var oneMonthAgo = new Date();
      var oneYearAgo = new Date();

      oneWeekAgo.setTime(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      oneMonthAgo.setTime(today.getTime() - 28 * 24 * 60 * 60 * 1000);
      oneYearAgo.setTime(today.getTime() - 365 * 24 * 60 * 60 * 1000);

      const OneWeekData = TransactionList.filter((trans) => {
        return new Date(trans.date) > oneWeekAgo;
      });
      const OneMonthData = TransactionList.filter((trans) => {
        return new Date(trans.date) < oneMonthAgo;
      });
      const OneYearData = TransactionList.filter((trans) => {
        return new Date(trans.date) < oneYearAgo;
      });
      console.log(OneWeekData);
      SetData(OneWeekData, setWeekly);
      console.log(OneMonthData);
      console.log(OneYearData);
    }
  }, []);

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
                    amount={Weekly.amount}
                    percentage={Weekly.percentage}
                  ></CardProfiltLoss>

                  <CardProfiltLoss
                    title={"Monthly Sales"}
                    amount={Monthly.amount}
                    percentage={Monthly.percentage}
                  ></CardProfiltLoss>

                  <CardProfiltLoss
                    title={"Yearly Sales"}
                    amount={Yearly.amount}
                    percentage={Yearly.percentage}
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
