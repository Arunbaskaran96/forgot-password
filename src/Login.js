import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      try {
        await axios.post("https://localhost:8000/login", values);
        nav("/home");
      } catch (error) {
        console.log(error);
        alert("Incorrect eamil/password");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <br></br>
          <input
            name="email"
            value={formik.values.eamil}
            onChange={formik.handleChange}
            type="email"
          ></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
          ></input>
          <br></br>
          <input
            style={{ marginLeft: "60px" }}
            className="btn btn-primary"
            type="submit"
            value="Login"
          ></input>
          <br></br>
        </div>
      </form>
      <div>
        <Link className="btn btn-info" to="/tK5Cb">
          Forgot password
        </Link>
      </div>
      <div>
        <Link to="/register-user" className="btn btn-success">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
