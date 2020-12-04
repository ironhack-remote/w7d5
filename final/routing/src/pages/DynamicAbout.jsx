import React from "react";

// Every route component passes props down to the component that it is rendering
// under props.match.params you will be able to see the dynamic part of the url
const DynamicAbout = (props) => {
  console.log("props:", props);
  return (
    <div>
      <h1>
        {/* params is the property where you will find the dynamic part of the url. id is the property here because in the app.js we created the url with /about/:id. If the path was /about/:hello the property would be under match.params.hello */}
        This is the dynamic about area. The url says {props.match.params.id}
      </h1>
    </div>
  );
};

export default DynamicAbout;
