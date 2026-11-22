import { useState } from "react";

function App() {
  const [attendance, setAttendance] = useState(75);

  const increaseAttendance = () => {
    setAttendance(attendance + 1);
  };

  const decreaseAttendance = () => {
    if (attendance > 0) {
      setAttendance(attendance - 1);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Management</h1>

      <h2>College Name: IFIM College, Bengaluru</h2>
      <h3>Student Name: K. Rehan Maqsood</h3>
      <h3>Course: Bachelor of Computer Applications (BCA)</h3>
      <h3>Semester: 5 </h3>

      <h2>Attendance: {attendance}%</h2>

      <button onClick={increaseAttendance}>
        Increase Attendance
      </button>

      <button
        onClick={decreaseAttendance}
        style={{ marginLeft: "10px" }}
      >
        Decrease Attendance
      </button>
    </div>
  );
}

export default App;