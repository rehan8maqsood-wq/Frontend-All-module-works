import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState(50);

  const addStudent = () => {
    setStudents(students + 1);
  };

  const removeStudent = () => {
    if (students > 0) {
      setStudents(students - 1);
    }
  };

  const resetStudents = () => {
    setStudents(50);
  };

  return (
    <div className="container">
      <h1>Current Students</h1>

      <h2>{students}</h2>

      <button onClick={addStudent}>Add Student</button>

      <button onClick={removeStudent}>Remove Student</button>

      <button onClick={resetStudents}>Reset</button>
    </div>
  );
}

export default App;