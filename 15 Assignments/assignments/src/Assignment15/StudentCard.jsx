function StudentCard({ student }) {
  const { name, email, phone, course, semester } = student;

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "15px",
        width: "300px",
      }}
    >
      <h2>{name}</h2>

      <p>
        <b>Email:</b> {email}
      </p>

      <p>
        <b>Phone:</b> {phone}
      </p>

      <p>
        <b>Course:</b> {course}
      </p>

      <p>
        <b>Semester:</b> {semester}
      </p>
    </div>
  );
}

export default StudentCard;
