import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>Task 2 - Counter App</h2>

      <h1>{count}</h1>

      <button onClick={increment}>Increment (+)</button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        Decrement (-)
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;