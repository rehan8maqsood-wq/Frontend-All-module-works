function StudentInput({ studentName, setStudentName }) {
  return (
    <div>
      <h2>Student Input</h2>

      <input
        type="text"
        value={studentName}
        onChange={(event) =>
          setStudentName(event.target.value)
        }
        placeholder="Enter student name"
      />
    </div>
  );
}

export default StudentInput;