import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Portal() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div className="container-fluid">
          {/* Page Heading */}
          <Outlet />
          {/* <DoghnutChart/> */}
        </div>
      </div>
    </div>
  );
}

export default Portal;
