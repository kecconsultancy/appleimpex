import React, { useEffect, useState } from "react";

function CardProfiltLoss(props) {
  const [percentage, setPercentage] = useState("0%");
  const [profit, setProfit] = useState(false);
  useEffect(() => {
    props.amount >= 0 ? setProfit(true) : setProfit(false);
    setPercentage(props.percentage + "%");
  }, []);

  return (
    <div className="col-md-6 col-xl-4">
      <div className="card daily-sales">
        <div className="card-block">
          <h6 className="mb-4">{props.title}</h6>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="f-w-300 d-flex align-items-center m-b-0">
                {profit ? (
                  <i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i>
                ) : (
                  <i className="feather icon-arrow-down text-c-red f-30 m-r-10"></i>
                )}
                Rs. {props.amount}
              </h3>
            </div>

            <div className="col-3 text-right">
              <p className="m-b-0">{props.percentage}%</p>
            </div>
          </div>
          <div className="progress m-t-30" style={{ height: "7px" }}>
            {profit ? (
              <div
                className="progress-bar  progress-c-green"
                role="progressbar"
                style={{ width: percentage }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            ) : (
              <div
                className="progress-bar  progress-c-red"
                role="progressbar"
                style={{ width: percentage }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfiltLoss;
