import { useState } from "react";

function StudentForm({ addStudent }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    semester: "",
  });

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !student.name ||
      !student.email ||
      !student.phone ||
      !student.course ||
      !student.semester
    ) {
      alert("Please fill all fields");
      return;
    }

    addStudent(student);

    setStudent({
      name: "",
      email: "",
      phone: "",
      course: "",
      semester: "",
    });
  };

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={student.phone}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="semester"
          placeholder="Semester"
          value={student.semester}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
