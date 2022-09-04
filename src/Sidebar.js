import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href=""
      >
        <div className="sidebar-brand-icon">
          <i className="fa-solid fa-chalkboard-user" />
        </div>
        <div className="sidebar-brand-text mx-2">
          Student Mentor Management
        </div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link className="nav-link" to="/portal/TeachersList">
          <i class="fa-solid fa-person-chalkboard"></i>
          <span>List of Teachers</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <Link className="nav-link" to="/portal/StudentList">
          <i class="fa-solid fa-children"></i>
          <span>List of Students</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
    </ul>
  )
}

export default Sidebar;