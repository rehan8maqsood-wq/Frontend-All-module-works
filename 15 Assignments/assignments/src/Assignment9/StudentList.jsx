import { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    "Rehan",
    "Rahul",
    "Arun",
    "Akhil",
  ]);

  const addStudent = () => {
    setStudents([...students, "New Student"]);
  };

  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
          </li>
        ))}
      </ul>

      <button onClick={addStudent}>
        Add Student
      </button>
    </div>
  );
}

export default StudentList;