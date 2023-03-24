import React from "react";

function TableContainer() {
  return (
    <section class="pcoded-main-container">
      <div class="pcoded-wrapper">
        <div class="pcoded-content">
          <div class="pcoded-inner-content">
            <div class="page-header">
              <div class="page-block">
                <div class="row align-items-center">
                  <div class="col-md-12">
                    <div class="page-header-title">
                      <h5 class="m-b-10">Fabric Tables</h5>
                    </div>
                    <ul class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">
                          <i class="feather icon-home"></i>
                        </a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="#!">Tables</a>
                      </li>
                      <li class="breadcrumb-item">
                        <a href="javascript:">Fabric Table</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="main-body">
              <div class="page-wrapper">
                <div class="row">
                  <div class="col-xl-12">
                    <div class="card">
                      <div class="card-header">
                        <h5>Fabric List</h5>
                        <span class="d-block m-t-5">
                          To list the fabrics list
                        </span>
                      </div>
                      <div class="card-block table-border-style">
                        <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Fabric Name</th>
                                <th>price</th>
                                <th>Instocks</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Nylon</td>
                                <td>560</td>
                                <td>5</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Lygra</td>
                                <td>890</td>
                                <td>7</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TableContainer;
