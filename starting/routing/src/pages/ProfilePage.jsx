import React from "react";
import { Redirect } from "react-router-dom";

const ProfilePage = (props) => {
  console.log("props:", props);

  if (props.user.role !== "admin") {
    return <Redirect to="/about" />;
  }
  return (
    <div>
      <button onClick={() => props.history.push("/about")}>
        Redirect to about page
      </button>
      <button onClick={() => props.history.goBack()}>Go back</button>
    </div>
  );
};

export default ProfilePage;
