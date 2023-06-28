import React from "react";

function Test(props) {
  console.log("B render");
  return <div className="App">{props.value}</div>;
}

export default Test;
