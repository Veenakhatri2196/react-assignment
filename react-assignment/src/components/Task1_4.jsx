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

      <button onClick={() => setIsDisabled(true)}>
        Disable Submit
      </button>

      <button
        onClick={() => setIsDisabled(false)}
        style={{ marginLeft: "10px" }}
      >
        Enable Submit
      </button>

      <br />
      <br />

      <p
        style={{
          color: isDisabled ? "red" : "green",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {isDisabled
          ? "🔴 Button is Disabled"
          : "🟢 Button is Enabled"}
      </p>
    </div>
  );
}

export default Task1_4;