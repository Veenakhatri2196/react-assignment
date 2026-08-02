import { useState } from "react";

function Task1_4() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <h2>Task 1.4 - Enable / Disable Button</h2>

      <button disabled={isDisabled}>
        Submit
      </button>

      <br />
      <br />

      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? "Enable Submit Button" : "Disable Submit Button"}
      </button>
    </div>
  );
}

export default Task1_4;