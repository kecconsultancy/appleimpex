import React, { useEffect, useState } from "react";
import TransactionsListRow from "./TransactionsListRow";
import { getDataFromStorage } from "../utils/functions";

function TranactionsList() {
  const [TailorData, setTailorData] = useState([]);
  const [RingerData, setRingerData] = useState([]);
  const [ParcelerData, setParcelerData] = useState([]);
  useEffect(() => {
    const Tailor = getDataFromStorage("AssighTailorList")
      ?.sort((a, b) => a.DeliveryDate - b.DeliveryDate)
      .slice(-5);
    const Ringer = getDataFromStorage("AssignRingerList")
      ?.sort((a, b) => a.DeliveryDate - b.DeliveryDate)
      .slice(-5);
    const Parceler = getDataFromStorage("AssignParcelerList")
      ?.sort((a, b) => a.ReturnDate - b.ReturnDate)
      .slice(-5);
    setTailorData(Tailor);
    setRingerData(Ringer);
    setParcelerData(Parceler);
  }, []);

  return (
    <div className="col-xl-12 col-md-12 m-b-30">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="false"
          >
            Tailor
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active show"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="true"
          >
            Ringer
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Parcel
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Time</th>
                <th>Status</th>
                <th className="text-right"></th>
              </tr>
            </thead>
            <tbody>
              {TailorData?.map((el) => (
                <TransactionsListRow
                  name={el.TailorName}
                  content={`${el.Quantity} per piece`}
                  date={el.DeliveryDate}
                  status={el.status}
                ></TransactionsListRow>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade active show"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Time</th>
                <th>Status</th>
                <th className="text-right"></th>
              </tr>
            </thead>
            <tbody>
              {RingerData?.map((el) => (
                <TransactionsListRow
                  name={el.RingerName}
                  content={`${el.Pices} per piece`}
                  date={el.DeliveryDate}
                  status={el.status}
                ></TransactionsListRow>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Time</th>
                <th>Status</th>
                <th className="text-right"></th>
              </tr>
            </thead>
            <tbody>
              {ParcelerData?.map((el) => (
                <TransactionsListRow
                  name={el.PackageName}
                  content={`${el.Pieces} per piece`}
                  date={el.ReturnDate}
                  status={el.status}
                ></TransactionsListRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TranactionsList;
