import { useState } from "react";

function StudentSearch() {
  const [search, setSearch] = useState("");

  const students = [
    "Rehan",
    "Rahul",
    "Arun",
    "Akhil",
    "Riya",
    "Anjali",
  ];

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Student Search</h1>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search student"
      />

      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>
            {student}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentSearch;