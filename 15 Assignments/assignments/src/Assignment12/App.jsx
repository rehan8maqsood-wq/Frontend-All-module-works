import StudentCard from "./StudentCard";

function App() {
  const students = [
    {
      name: "Rehan",
      roll: "101",
      course: "BCA",
    },
    {
      name: "Rahul",
      roll: "102",
      course: "BCA",
    },
    {
      name: "Arun",
      roll: "103",
      course: "BCA",
    },
    {
      name: "Akhil",
      roll: "104",
      course: "BCA",
    },
    {
      name: "Riya",
      roll: "105",
      course: "BCA",
    },
  ];

  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <StudentCard
          key={student.roll}
          name={student.name}
          roll={student.roll}
          course={student.course}
        />
      ))}
    </div>
  );
}

export default App;