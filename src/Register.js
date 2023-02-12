import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://forgotpassword-g94p.onrender.com/G6Ma9",
          values
        );
        nav("/");
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-4">
            <label>First Name</label>
            <br></br>
            <label>Last Name</label>
            <br></br>
            <label>Email</label>
            <br></br>
            <label>Password</label>
            <br></br>
          </div>
          <div className="col-4">
            <input
              name="firstname"
              type="text"
              value={formik.values.firstname}
              onChange={formik.handleChange}
            ></input>
            <br></br>
            <input
              name="lastname"
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            ></input>
            <br></br>
            <input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            ></input>
            <br></br>
            <input
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            ></input>
            <br></br>
            <input type="submit" value="Create"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
