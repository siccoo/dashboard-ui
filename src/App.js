import React, { useState} from "react";
import { Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      {/* <!-- Top Bar Start --> */}
        <div className="topbar">

            {/* <!-- LOGO --> */}
            <div className="topbar-left">
                <a href="index.html" className="logo">
                    <span className="logo-light">
                            <i className="" ></i> TransMonitor
                    </span>
                    <span className="logo-sm"></span>
                </a>
            </div>

            <nav className="navbar-custom">
                <ul className="navbar-right list-inline float-right mb-0">       

                     <li className="dropdown notification-list list-inline-item">
                        <div className="dropdown notification-list nav-pro-img">
                            <a className="dropdown-toggle nav-link arrow-none nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                {/* <img src="assets/images/users/no-img.png" alt="user" className="rounded-circle"> */}
                                <img className="rounded-circle" src={require("./images/Rounded-Image.png")} alt="user" />
                            </a>
                        </div>
                    </li>

                </ul>

                <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                        <button className="button-menu-mobile open-left waves-effect">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </li>
                    <li className="d-none d-md-inline-block">
                        <form role="search" className="app-search">
                            <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Search.." />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </div>
                        </form>
                    </li>
                </ul>

            </nav>

        </div>
        {/* <!-- Top Bar End --> */}

        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="left side-menu">
            <div className="slimscroll-menu" id="remove-scroll">

                {/* <!--- Sidemenu --> */}
                <div id="sidebar-menu">
                    {/* <!-- Left Menu Start --> */}
                    <ul className="metismenu" id="side-menu">
                        <li className="menu-title">Menu</li>
                        <li>
                            <a href="index.html" className="waves-effect">
                                <i className="icon-accelerator"></i><span> Dashboard </span>
                            </a>
                        </li>

                        <li className="menu-title">Payments</li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-account-circle"></i><span> Leads <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></a>
                            <ul className="submenu">
                                <li><a href="mylead.html">My Lead</a></li>
                                <li><a href="addlead.html">Add Lead</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-chart-line"></i><span> My Tasks <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></a>
                            <ul className="submenu">
                                <li><a href="deadline.html">Deadlines</a></li>
                                <li><a href="missed.html">Missed</a></li>
                                <li><a href="closed.html">Closed</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-clipboard-check"></i> <span> Deals <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul className="submenu">
                                <li><a href="#"> Open
                                </a></li>
                                <li><a href="#">Closed</a></li>
                                <li><a href="#">Deadline</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-account-group"></i> <span> Users <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul className="submenu">
                                <li><a href="myteam.html">My Team List</a></li>
                                <li><a href="alllead.html">All Leads</a></li>
                                <li><a href="viewteam.html">View Team Activities</a></li>
                                <li><a href="addrep.html">Add Sales Rep</a></li>
                                <li><a href="viewexpectation.html">View Expectations</a></li>
                            </ul>
                        </li>

                        <li className="menu-title">Orders</li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-package-variant"></i> <span> Products <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul className="submenu">
                                <li><a href="addproduct.html">Add Product(s)</a></li>
                                <li><a href="manageprod.html">Manage Product(s)</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-account-card-details"></i> <span> Roles <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul className="submenu">
                                <li><a href="addrole.html">Add Role</a></li>
                                <li><a href="managerole.html">Manage Role</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-orbit"></i> <span> Status <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            <ul className="submenu">
                                <li><a href="addstat.html">Add Status</a></li>
                                <li><a href="managestat.html">Manage Status</a></li>
                            </ul>
                        </li>

                    </ul>

                </div>
                {/* <!-- Sidebar --> */}
                <div className="clearfix"></div>

            </div>
            {/* <!-- Sidebar -left --> */}

        </div>
        {/* <!-- Left Sidebar End --> */}
      </div>
    </div>
  );
}

export default App;
