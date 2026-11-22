import StudentCard from "./StudentCard";

function StudentList() {
  const students = [
    {
      name: "Rehan",
      roll: "101",
    },
    {
      name: "Rahul",
      roll: "102",
    },
    {
      name: "Arun",
      roll: "103",
    },
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <StudentCard
          key={student.roll}
          name={student.name}
          roll={student.roll}
        />
      ))}
    </div>
  );
}

export default StudentList;