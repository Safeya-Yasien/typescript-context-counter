import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  const { counter, increaseCounter, decreaseCounter } =
    useContext(CounterContext);
  return (
    <>
      <div>{counter}</div>
      <button style={{ margin: "10px" }} onClick={increaseCounter}>
        +
      </button>
      <button onClick={decreaseCounter}>-</button>
    </>
  );
};

export default Counter;
