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
        await axios.post("http://localhost:8000/login", values);
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
          <input type="submit" value="Login"></input>
          <br></br>
        </div>
      </form>
      <div>
        <Link className="btn" to="/forgot">
          Forgot password
        </Link>
      </div>
    </div>
  );
}

export default Login;
