import React from "react";
import { useSelector, useDispatch } from 'react-redux'

function Test() {
    const value = useSelector((state) => state.counter.outerConfig.configC)
    const dispatch = useDispatch()
    console.log('C render');
  return (
    <div className="App">
      {value.comC}
    </div>
  );
}

export default Test;
