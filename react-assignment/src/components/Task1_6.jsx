import { useState } from "react";

// Child Component
function Student(props) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>
    </div>
  );
}

function Task1_6() {
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const addStudent = () => {
    if (name === "" || age === "" || city === "") {
      alert("Please fill all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      age: age,
      city: city,
    };

    setStudents([...students, newStudent]);

    // Clear input fields
    setName("");
    setAge("");
    setCity("");
  };

  return (
    <div>
      <h2>Task 1.6 - Dynamically Add Child Components</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      {students.map((student) => (
        <Student
          key={student.id}
          name={student.name}
          age={student.age}
          city={student.city}
        />
      ))}
    </div>
  );
}

export default Task1_6;