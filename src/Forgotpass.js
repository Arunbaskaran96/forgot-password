import axios from "axios";
import { useFormik } from "formik";
import React from "react";

function Forgotpass() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: () => {},
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://forgotpassword-g94p.onrender.com/forgot",
          values
        );
        alert("Check your registered email");
      } catch (error) {
        console.log(error);
        alert("something went wrong");
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
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default Forgotpass;
