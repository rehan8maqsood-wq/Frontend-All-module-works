import StudentCard from "./StudentCard";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students registered.</p>
      ) : (
        students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))
      )}
    </div>
  );
}

export default StudentList;
