import { useState } from "react";

function Task1_5() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Task 1.5 - Two-Way Data Binding</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default Task1_5;