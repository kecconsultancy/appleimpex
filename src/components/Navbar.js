import React from "react";
import NavbarIcons from "./NavbarIcons";

function Navbar() {
  return (
    <nav className="pcoded-navbar">
      <div className="navbar-wrapper">
        <div className="navbar-brand header-logo">
          <a href="index.html" className="b-brand">
            <div className="b-bg">
              <i className="feather icon-trending-up"></i>
            </div>
            <span className="b-title">Apple Impex</span>
          </a>
          <a className="mobile-menu" id="mobile-collapse" href="javascript:">
            <span></span>
          </a>
        </div>
        <div className="navbar-content scroll-div">
          <ul className="nav pcoded-inner-navbar">
            <li className="nav-item pcoded-menu-caption">
              <label>Navigation</label>
            </li>
            <li
              data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
              className="nav-item active"
            >
              <a href="index.html" className="nav-link ">
                <span className="pcoded-micon">
                  <i className="feather icon-home"></i>
                </span>
                <span className="pcoded-mtext">Dashboard</span>
              </a>
            </li>
            <li className="nav-item pcoded-menu-caption">
              <label>Forms</label>
            </li>
            <NavbarIcons
              placeholder="Create Fabric"
              link="/createfabric"
            ></NavbarIcons>
            <NavbarIcons
              placeholder="Create Customer"
              link="/createcustomer"
            ></NavbarIcons>
            <NavbarIcons
              placeholder="Create Tailor"
              link="/createtailor"
            ></NavbarIcons>
            <NavbarIcons
              placeholder="Create Ringer"
              link="/createring"
            ></NavbarIcons>
            <NavbarIcons
              placeholder="Create Parceler"
              link="/createparceler"
            ></NavbarIcons>

            <li className="nav-item pcoded-menu-caption">
              <label>Forms</label>
            </li>
            <NavbarIcons placeholder="Add Fabric"></NavbarIcons>
            <NavbarIcons placeholder="Add an order"></NavbarIcons>
            <NavbarIcons placeholder="Assign Tailor"></NavbarIcons>
            <NavbarIcons placeholder="Assign Ringer"></NavbarIcons>
            <NavbarIcons placeholder="Assign Parceler"></NavbarIcons>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
