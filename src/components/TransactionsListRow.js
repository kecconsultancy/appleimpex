import React from "react";

function TransactionsListRow(props) {
  return (
    <tr>
      <td>
        <h6 className="m-0">
          <img
            className="rounded-circle m-r-10"
            style={{ width: "40px" }}
            src="assets/images/user/avatar-2.jpg"
            alt="activity-user"
          />
          {props.name}
        </h6>
      </td>
      <td>
        <h6 className="m-0">{props.content}</h6>
      </td>
      <td>
        <h6 className="m-0">{props.date}</h6>
      </td>
      <td>
        {props.status == "COMPLETED" ? (
          <h6 className="m-0 text-c-green">Done</h6>
        ) : props.status == "DELAYED" ? (
          <h6 className="m-0 text-c-red">Delayed</h6>
        ) : props.status == "PENDING" ? (
          <h6 className="m-0 text-c-purple">Pending</h6>
        ) : (
          ""
        )}
      </td>
      {/* <td className="text-right">
        <i className="fas fa-circle text-c-green f-10"></i>
      </td> */}
    </tr>
  );
}

export default TransactionsListRow;
