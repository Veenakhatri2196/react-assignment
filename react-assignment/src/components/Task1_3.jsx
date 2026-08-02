import { useState } from "react";

function Task1_3() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h2>Task 1.3 - Show / Hide Element</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      <br />
      <br />

      {show && (
        <h3>Hi! I am learning React.</h3>
      )}
    </div>
  );
}

export default Task1_3;