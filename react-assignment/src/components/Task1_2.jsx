function Task1_2() {

  const students = [
    {
      id: 1,
      name: "Veena",
      age: 24,
      city: "Jaipur"
    },
    {
      id: 2,
      name: "Prerna",
      age: 23,
      city: "Delhi"
    },
    {
      id: 3,
      name: "Karan",
      age: 21,
      city: "Mumbai"
    }
  ];

  return (
    <div>
      <h2>Task 1.2 - Display Array of Records</h2>

      {students.map((student) => (
        <div key={student.id}>
          <h3>Name: {student.name}</h3>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Task1_2;