import React from "react";

function NavbarIcons(props) {
  return (
    <li
      data-username="form elements advance componant validation masking wizard picker select"
      className="nav-item"
    >
      <a href="form_elements.html" className="nav-link ">
        <span className="pcoded-micon">
          <i className="feather icon-file-text"></i>
        </span>
        <span className="pcoded-mtext">{props.placeholder}</span>
      </a>
    </li>
  );
}

export default NavbarIcons;
