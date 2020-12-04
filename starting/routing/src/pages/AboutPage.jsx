import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>This is my about page</h1>
      <div>
        Please go check out <Link to="/">The Home Page for more info</Link>
      </div>
    </div>
  );
};

export default AboutPage;
