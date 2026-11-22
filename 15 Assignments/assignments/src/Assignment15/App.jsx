import { useState } from "react";

import Header from "./Header";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import Attendance from "./Attendance";
import Footer from "./Footer";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([
      ...students,
      {
        ...student,
        id: Date.now(),
      },
    ]);
  };

  return (
    <div>
      <Header />

      <StudentForm addStudent={addStudent} />

      <StudentList students={students} />

      <Attendance />

      <Footer />
    </div>
  );
}

export default App;
