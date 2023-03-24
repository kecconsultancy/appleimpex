import React from "react";

function RecentListRows(props) {
  return (
    <tr className="unread">
      <td>
        {" "}
        <img
          className="rounded-circle m-r-10"
          style={{ width: "40px" }}
          src="assets/images/user/avatar-1.jpg"
          alt="activity-user"
        />
      </td>
      <td>
        <h6 className="mb-1">{props.customerName}</h6>
      </td>
      <td>
        <p className="m-0">{props.count} nos</p>
      </td>
      <td>
        <p className="m-0">Rs.{props.value}</p>
      </td>
      <td>
        <h6 className="text-muted">
          {props.delivered ? (
            <i className="fas fa-circle text-c-green f-10 m-r-15"></i>
          ) : (
            <i className="fas fa-circle text-c-red f-10 m-r-15"></i>
          )}
          {props.date}
        </h6>
      </td>
      <td>
        {props.delivered ? (
          <a href="#!" className="label bg-c-green text-white f-12">
            Delivered
          </a>
        ) : (
          <a href="#!" className="label bg-c-red text-white f-12">
            Not Delivered
          </a>
        )}
      </td>
    </tr>
  );
}

export default RecentListRows;
