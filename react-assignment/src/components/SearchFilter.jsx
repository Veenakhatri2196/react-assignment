import { useState } from "react";

function SearchFilter() {
  const students = [
    "Veena",
    "Prerna",
    "Karan",
    "Pratibha",
    "Prachi",
    "Hardika",
  ];

  const [search, setSearch] = useState("");

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 3 - Search Filter</h2>

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <br />
      <br />

      {filteredStudents.length > 0 ? (
        <div
          style={{
            width: "300px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
            }}
          >
            {filteredStudents.map((student, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "8px",
                }}
              >
                {student}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>No Data Found</h3>
      )}
    </div>
  );
}

export default SearchFilter;