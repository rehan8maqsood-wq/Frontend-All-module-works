function StudentCard({
  studentName,
  rollNumber,
  course,
  semester,
  college,
}) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        width: "300px",
        margin: "20px",
      }}
    >
      <h2>{studentName}</h2>

      <p>
        <b>Roll Number:</b> {rollNumber}
      </p>

      <p>
        <b>Course:</b> {course}
      </p>

      <p>
        <b>Semester:</b> {semester}
      </p>

      <p>
        <b>College:</b> {college}
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Information</h1>

      <StudentCard
        studentName="Rehan"
        rollNumber="101"
        course="BCA"
        semester="3"
        college="IFIM College"
      />
    </div>
  );
}

export default App;