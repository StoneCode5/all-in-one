import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slice";

function Test() {
  const value = useSelector((state) => state.counter.outerConfig.configA.comA);
  const dispatch = useDispatch();
    console.log('A render');
  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Test;
