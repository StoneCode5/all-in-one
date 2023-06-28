import React from "react";
import { useSelector, useDispatch } from "react-redux";

import ComponentA from "./components/componentAPure";
import ComponentB from "./components/componentB";
import ComponentC from "./components/componentCPure";

function Test() {
  console.log("parent Render");
  const value1 = useSelector((state) => state.counter.outerConfig.configA);
  const value2 = useSelector((state) => state.counter.outerConfig.configB);
  const value3 = useSelector((state) => state.counter.outerConfig.configC);

  return (
    <div className="App">
      <ComponentA value={value1.comA} />
      <ComponentB  />
      <ComponentC value={value3.comC} />
    </div>
  );
}

export default Test;
