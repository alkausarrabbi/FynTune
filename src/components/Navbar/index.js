import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12 text-center bg-info py-2">
      <nav className="navbar bg-info text-white navbar-light">
        <Link to={"/"} className="navbar-brand ml-5">
         FynTune Shop finder
        </Link>
      </nav>
    </div>
      </div>
    </div>
  );
};

export default Navbar;
