import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [studentName, setStudentName] = useState("Rehan");

  const changeName = (newName) => {
    setStudentName(newName);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Parent Name: {studentName}</h2>

      <Child
        studentName={studentName}
        changeName={changeName}
      />
    </div>
  );
}

export default Parent;