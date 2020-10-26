import React, { useState} from "react";
import { Link } from "react-router-dom";
// import Rounded from "../images/Rounded.png";

import './App.css';

import { IoIosSearch } from "react-icons/io";
import { FaTachometerAlt } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"


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
                                {/* <img className="rounded-circle" src={require("./images/Rounded.png")} alt="user" /> */}
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
                                <button type="submit">
                                  {/* <i className="fa fa-search"></i> */}
                                  <IoIosSearch className="icons" />
                                </button>
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
                            <FaTachometerAlt className="R-icon" />
                            <span> Dashboard </span>
                            </a>
                        </li>

                        <li className="menu-title">Payments</li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect">
                              <i className="mdi mdi-account-circle"></i><span> All Payments <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></a>
                            
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-chart-line"></i><span> My Tasks <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></a>
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-clipboard-check"></i> <span> Deals <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-account-group"></i> <span> Users <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            
                        </li>

                        <li className="menu-title">Orders</li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-package-variant"></i> <span> Products <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-account-card-details"></i> <span> Roles <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            
                        </li>

                        <li>
                            <a href="javascript:void(0);" className="waves-effect"><i className="mdi mdi-orbit"></i> <span> Status <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </a>
                            
                        </li>

                    </ul>

                </div>
                {/* <!-- Sidebar --> */}
                <div className="clearfix"></div>

            </div>
            {/* <!-- Sidebar -left --> */}

        </div>
        {/* <!-- Left Sidebar End --> */}


        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-xl-3">
                  <div className="card">
                      <div className="card-heading p-4">
                          <div className="mini-stat-icon float-right">
                              <i className="mdi mdi-account-plus bg-primary  text-white"></i>
                          </div>
                          <div>
                              <h5 className="font-16">Daily Transaction Volume</h5>
                          </div>
                          <p className="text-muted mt-2 mb-0">2,342</p>
                      </div>
                  </div>
              </div>

              <div className="col-sm-6 col-xl-3">
                  <div className="card">
                      <div className="card-heading p-4">
                          <div className="mini-stat-icon float-right">
                              <i className="mdi mdi-thumb-up bg-success text-white"></i>
                          </div>
                          <div>
                              <h5 className="font-16">Daily Transaction Value</h5>
                          </div>
                          
                          <p className="text-muted mt-2 mb-0">₦4,000,000</p>
                      </div>
                  </div>
              </div>

              <div className="col-sm-6 col-xl-3">
                  <div className="card">
                      <div className="card-heading p-4">
                          <div className="mini-stat-icon float-right">
                              <i className="mdi mdi-phone-missed bg-warning text-white"></i>
                          </div>
                          <div>
                              <h5 className="font-16">Total Transaction Volume</h5>
                          </div>
                          <p className="text-muted mt-2 mb-0">452,000</p>
                      </div>
                  </div>
              </div>

              <div className="col-sm-6 col-xl-3">
                  <div className="card">
                      <div className="card-heading p-4">
                          <div className="mini-stat-icon float-right">
                              <i className="mdi mdi-calendar-check bg-danger text-white"></i>
                          </div>
                          <div>
                              <h5 className="font-16">Total Transaction Value</h5>
                          </div>
                          <p className="text-muted mt-2 mb-0">₦4,000,000</p>
                      </div>
                  </div>
              </div>
            </div>
      
            <div className="page-title-box">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h4 className="page-title">Payments</h4>
                </div>
              </div>
              {/* <!-- end row --> */}
            </div>

            {/* <!-- START ROW --> */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card m-b-30">
                                {/* <div className="card-body"> */}
                                    {/* <h4 className="mt-0 header-title mb-4">My Lead</h4> */}
                                    
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead className="">
                                                <tr>
                                                    <th scope="col">Item Type</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Transaction No</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col"></th>
                                                    <th scope="col" colspan="2"></th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        {/* <p>Paid completely for Academy training</p> */}
                                                        <p>Apple Mac Book 15” 250 SSD 12GB</p>
                                                    </td>
                                                    <td>
                                                      $73430
                                                    </td>
                                                    <td>
                                                      <span className="green">Invoice sent</span>
                                                    </td>
                                                    <td>
                                                      12:30
                                                    </td>
                                                    
                                                    <td>
                                                        
                                                    </td>

                                                    <td>
                                                        <div>
                                                          <FaChevronDown className="payment-table" />
                                                            {/* <a href="#" className="btn btn-primary btn-sm">Edit</a> */}
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>

                                {/* </div> */}
                            </div>
                        </div>

                    </div>
                    {/* <!-- END ROW --> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
