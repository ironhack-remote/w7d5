import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div
        style={{
          style: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Link component is from react-router-dom it takes a *to* prop and that is the link to the page you want to go to. */}
        <Link to="/">Home Page</Link>
        {/* Its the equivalent of <a href="/about">About</a> */}
        <Link to="/about">About</Link>
        <Link to="/about/about">Dynamic About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
