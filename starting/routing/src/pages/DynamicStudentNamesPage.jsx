import React from "react";

const DynamicStudentNamesPage = (props) => {
  console.log("props:", props);
  return (
    <div>
      <h1>This is the page of {props.match.params.id}</h1>
    </div>
  );
};

export default DynamicStudentNamesPage;
