import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg mb-5">
        <Link to={"/"} className="navbar-brand px-4">
          ExerTracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-items">
              <Link to={"/"} className="nav-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to={"/create"} className="nav-link">Create Exercise log</Link>
            </li>
            <li className="navbar-item">
              <Link to={"/user"} className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
