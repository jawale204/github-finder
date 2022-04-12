import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Notfound() {
  return (
    <div className="text-center">
      <div className="text-8xl font-bold ">OOPS!</div>
      <div className="text-5xl mb-10">404 - Page not found</div>
      <Link to="/" className="btn btn-primary">
        <FaHome className="mr-3" />
        Back to home
      </Link>
    </div>
  );
}

export default Notfound;
