import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Welcome </h1>
      <Link className="btn" to="/">
        Log out
      </Link>
    </div>
  );
}

export default Home;
