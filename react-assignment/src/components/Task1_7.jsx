import { useState } from "react";

function Task1_7() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h2>Task 1.7 - Sum of Two Numbers</h2>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />
      <br />

      <button onClick={calculateSum}>
        Calculate Sum
      </button>

      <h3>Sum = {sum}</h3>
    </div>
  );
}

export default Task1_7;