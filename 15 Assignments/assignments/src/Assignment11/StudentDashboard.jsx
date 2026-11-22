import { useState } from "react";
import StudentInput from "./StudentInput";
import StudentDisplay from "./StudentDisplay";

function StudentDashboard() {
  const [studentName, setStudentName] = useState("");

  return (
    <div>
      <StudentInput
        studentName={studentName}
        setStudentName={setStudentName}
      />

      <StudentDisplay studentName={studentName} />
    </div>
  );
}

export default StudentDashboard;