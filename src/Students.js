import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "./usercontext";

function Students() {
  const userContextData = useContext(UserContext);
  const studentsList = userContextData.students;

  const handleDelete = async (id) => {
    let ask = window.confirm("Are you sure you want to delete this Id ?");
    if (ask) {
      await axios.delete(
        `https://624462c139aae3e3b74f6e69.mockapi.io/students/${id}`
      );
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  let fetchData = async () => {
    let userData = await axios.get(
      "https://624462c139aae3e3b74f6e69.mockapi.io/students"
    );
    userContextData.setStudents(userData.data);
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h8 className="mb-0 text-gray-800">
          To add a new student details click on "Add Student" button, to edit
          existing information click "Edit" button or to delete existing
          information click "Delete" button.
        </h8>
      </div>
      <Link
        to="/portal/StudentList/CreateStudents"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mb-3"
      >
        <i className="fa-solid fa-user"></i> Add New Student
      </Link>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Student List</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead align="center">
                <tr>
                  <th>Name</th>
                  <th>Section</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Assigned Mentor</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot align="center">
                <tr>
                  <th>Name</th>
                  <th>Section</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Assigned Mentor</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {studentsList.map((student) => {
                  return (
                    <tr align="center">
                      <td>{student.name}</td>
                      <td>{student.section}</td>
                      <td>{student.age}</td>
                      <td>{student.gender}</td>
                      <td>{student.mentor}</td>
                      <td>
                        <Link
                          to={`/portal/StudentList/EditStudent/${student.id}`}
                          className="btn btn-warning mr-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="btn btn-danger mr-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
