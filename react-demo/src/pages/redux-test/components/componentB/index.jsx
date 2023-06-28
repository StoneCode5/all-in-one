import React from "react";
import { useSelector, useDispatch } from 'react-redux'

function Test() {
    const value = useSelector((state) => state.counter.outerConfig)
    const dispatch = useDispatch()
    console.log('B render s');
  return (
    <div className="App">
      {value.configB.comB}
    </div>
  );
}

export default Test;

