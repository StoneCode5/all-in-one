import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../slice";

function Test(props) {
  const dispatch = useDispatch();
  console.log("A render");
  return (
    <div className="App">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          IncrementP
        </button>
        <span>{props.value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          DecrementP
        </button>
      </div>
    </div>
  );
}

export default Test;
