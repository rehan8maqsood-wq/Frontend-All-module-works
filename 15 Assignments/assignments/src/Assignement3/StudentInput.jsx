import { useState } from "react";

function StudentInput() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>Student Input</h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter student name"
      />

      <h2>Student Name: {name}</h2>
    </div>
  );
}

export default StudentInput;