import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/students">
        <h2>Students</h2>
        <Link to="/students/block/fun">
          <h3>Fundamentals Block</h3>
        </Link>
        <Link to="/students/block/be">
          <h3>Backend Block</h3>
        </Link>
        <Link to="/students/block/fe">
          <h3>Frontend Block</h3>
        </Link>
        <Link to="/students/block/grads">
          <h3>Graduated Students</h3>
        </Link>
      </Link>
    </nav>
  );
};

export default NavBar;
