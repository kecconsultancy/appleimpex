import React from "react";
import { Outlet } from "react-router-dom";

function FormContainer() {
  return (
    <>
      <div class="pcoded-main-container">
        <div class="pcoded-wrapper">
          <div class="pcoded-content">
            <div class="pcoded-inner-content">
              <div class="page-header">
                <div class="page-block">
                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <div class="page-header-title">
                        <h5 class="m-b-10">Form Elements</h5>
                      </div>
                      <ul class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="index.html">
                            <i class="feather icon-home"></i>
                          </a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="javascript:">Form Componants</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormContainer;
