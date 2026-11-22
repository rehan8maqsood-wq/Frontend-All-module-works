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

  const resetAttendance = () => {
    setPresent(0);
  };

  const absent = totalStudents - present;

  return (
    <div>
      <h2>Attendance</h2>

      <p>Total Students: {totalStudents}</p>

      <p>Present: {present}</p>

      <p>Absent: {absent}</p>

      <button onClick={increasePresent}>Present +</button>

      <button onClick={decreasePresent}>Present -</button>

      <button onClick={resetAttendance}>Reset</button>
    </div>
  );
}

export default Attendance;
