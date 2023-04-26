import React from "react";
import TransactionsListRow from "./TransactionsListRow";

function TranactionsList() {
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
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="COMPLETED"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="PENDING"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="DELAYED"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="COMPLETED"
              ></TransactionsListRow>
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
              <TransactionsListRow
                name="Abhimanyu v"
                content="35 per piece"
                date="2015-04-9"
                status="COMPLETED"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="PENDING"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="DELAYED"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="COMPLETED"
              ></TransactionsListRow>
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
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="COMPLETED"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="PENDING"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="DELAYED"
              ></TransactionsListRow>
              <TransactionsListRow
                name="Abhimanyu V"
                content="35 per piece"
                date="2015-04-9"
                status="COMPLETED"
              ></TransactionsListRow>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TranactionsList;
