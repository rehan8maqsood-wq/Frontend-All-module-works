import { useState } from "react";

function Attendance() {
  const [present, setPresent] = useState(0);

  const totalStudents = 50;

  const increasePresent = () => {
    if (present < totalStudents) {
      setPresent(present + 1);
    }
  };

  const decreasePresent = () => {
    if (present > 0) {
      setPresent(present - 1);
    }
  };

  const reset = () => {
    setPresent(0);
  };

  const absent = totalStudents - present;

  return (
    <div>
      <h1>Attendance Manager</h1>

      <h2>Present: {present}</h2>

      <h2>Absent: {absent}</h2>

      <h2>Total Students: {totalStudents}</h2>

      <button onClick={increasePresent}>
        Present +
      </button>

      <button onClick={decreasePresent}>
        Present -
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Attendance;