function StudentCard({ name, roll }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{name}</h3>

      <p>Roll Number: {roll}</p>
    </div>
  );
}

export default StudentCard;