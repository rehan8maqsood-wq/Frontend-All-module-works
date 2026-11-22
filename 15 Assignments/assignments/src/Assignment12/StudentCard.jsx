function StudentCard({ name, roll, course }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h2>{name}</h2>

      <p>Roll Number: {roll}</p>

      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;