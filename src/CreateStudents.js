import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateStudents() {
  let navigation = useNavigate();
  let [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      section: "",
      age: "",
      gender: "",
      mentor: "",
    },
    validate: (values) => {
      const errors = {};
      let pattern = new RegExp(/^[a-zA-Z\-]+$/);
      if (!values.name) {
        errors.name = "Please enter the name";
      } else if (values.name.length < 5) {
        errors.name = "Length must be greater than 5";
      } else if (values.name.length > 20) {
        errors.name = "Length must be less than 20";
      } else if (!pattern.test(formik.values.name)) {
        errors.name = "Enter the valid name";
      }
      if (!values.section) {
        errors.section = "Please Enter the section";
      }
      if (!values.age) {
        errors.age = "Please Enter the age";
      } else if (values.age < 5) {
        errors.age = "Please Enter the valid age";
      } else if (values.age > 25) {
        errors.age = "Please Enter the valid age";
      }

      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
      await axios.post(
        "https://624462c139aae3e3b74f6e69.mockapi.io/students",
        values
      );
      navigation("/portal/StudentList");
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
            />
            {formik.errors.name ? (
              <span style={{ color: "red" }}> {formik.errors.name}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Section</label>
            <input
              type="text"
              name="section"
              onChange={formik.handleChange}
              value={formik.values.section}
              className="form-control"
            />
            {formik.errors.section ? (
              <span style={{ color: "red" }}> {formik.errors.section}</span>
            ) : null}
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type="number"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
            />
            {formik.errors.age ? (
              <span style={{ color: "red" }}> {formik.errors.age}</span>
            ) : null}
          </div>

          <div className="col-lg-6">
            <label>Gender</label>
            <br />
            <input
              type="text"
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              className="form-control"
            />
          </div>

          <div className="col-lg-6">
            <label>Mentor Name</label>
            <br />
            <input
              type="text"
              name="mentor"
              onChange={formik.handleChange}
              value={formik.values.mentor}
              className="form-control"
            />
          </div>

          <div className="col-lg-8">
            <input
              type={"submit"}
              value="Submit"
              className="btn btn-primary mt-5"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateStudents;
