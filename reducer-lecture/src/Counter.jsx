import React from "react";
import { useReducer } from "react";

const Counter = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "increaseByTen":
        return state + 10;
      case "reset":
        return 0;

      default:
        return state;
    }
  };

  let initialState = 0;
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increaseByTen" })}>
          Increase by 10
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </>
  );
};


export default Counter;
