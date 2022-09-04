import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "./usercontext";

function Login() {
  let userData = useContext(UserContext);
  let [isLoading, setLoading] = useState(false);
  let navigation = useNavigate();

  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Please enter the username";
      } else if (values.username.length < 5) {
        errors.username = "Please enter the valid name";
      }
      if (!values.password) {
        errors.password = "Please enter the password";
      } else if (values.password < 5) {
        errors.password = "Please enter the valid password";
      }
      console.log(errors);
    },
    onSubmit: (values) => {
      try {
        setLoading(true);
        userData.setUser(values);
        console.log(userData.user);
        navigation("/portal/TeachersList");
      } catch (error) {}
    },
  });

  return (
    <div className="container">
      {/* Hello world */};{/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user">
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="User Name"
                        />
                        {formik.errors.username ? (
                          <span style={{ color: "red" }}>
                            {" "}
                            {formik.errors.username}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                        {formik.errors.password ? (
                          <span style={{ color: "red" }}>
                            {" "}
                            {formik.errors.password}
                          </span>
                        ) : null}
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <input
                          type={"submit"}
                          value="Submit"
                          disabled={!formik.isValid && isLoading}
                          className="btn btn-primary btn-user btn-block"
                        />
                      </div>
                      <hr />
                      <a
                        href="index.html"
                        className="btn btn-google btn-user btn-block"
                      >
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-facebook btn-user btn-block"
                      >
                        <i className="fab fa-facebook-f fa-fw" /> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
