import React from "react";
import { Link } from "react-router-dom";

function NavbarIcons(props) {
  return (
    <li
      data-username="form elements advance componant validation masking wizard picker select"
      className="nav-item"
    >
      <Link to={props.link} className="nav-link ">
        {/* <span className="pcoded-micon">
          <i className="feather icon-file-text"></i>
        </span> */}

        <span className="pcoded-mtext">{props.placeholder}</span>
      </Link>
    </li>
  );
}
//  comment
export default NavbarIcons;
