import { useState } from "react";
function App() {
  const [assignment, setAssignment] = useState("3");
  function Assignment1() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h2>Assignment 1 - Counter Application</h2>

        <h3>Count: {count}</h3>

        <button onClick={() => setCount(count + 1)}>+</button>

        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>

        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
  }

  function Assignment2() {
    function StudentCard({
      studentName,
      rollNumber,
      course,
      semester,
      college,
    }) {
      return (
        <div className="card">
          <h3>{studentName}</h3>
          <p>Roll Number: {rollNumber}</p>
          <p>Course: {course}</p>
          <p>Semester: {semester}</p>
          <p>College: {college}</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Assignment 2 - Student Information Card</h2>

        <StudentCard
          studentName="Rehan"
          rollNumber="101"
          course="BCA"
          semester="3"
          college="IFIM College"
        />
      </div>
    );
  }
  function Assignment3() {
    const [name, setName] = useState("");

    return (
      <div>
        <h2>Assignment 3 - Controlled Student Input</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Student Name"
        />

        <h3>Entered Name: {name}</h3>
      </div>
    );
  }
  function Assignment4() {
    const [student, setStudent] = useState({
      name: "",
      email: "",
      phone: "",
      course: "",
      semester: "",
    });

    const [submitted, setSubmitted] = useState(null);

    function handleChange(e) {
      setStudent({
        ...student,
        [e.target.name]: e.target.value,
      });
    }

    function handleSubmit(e) {
      e.preventDefault();

      // Store submitted student information
      setSubmitted({ ...student });

      // Clear the form
      setStudent({
        name: "",
        email: "",
        phone: "",
        course: "",
        semester: "",
      });
    }

    return (
      <div>
        <h2>Assignment 4 - Student Registration Form</h2>

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

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <div className="card">
            <h3>Student Information</h3>

            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Phone: {submitted.phone}</p>
            <p>Course: {submitted.course}</p>
            <p>Semester: {submitted.semester}</p>
          </div>
        )}
      </div>
    );
  }
  function Assignment5() {
    const [message, setMessage] = useState("");

    function Child({ sendMessage }) {
      return (
        <button onClick={() => sendMessage("Hello Parent!")}>
          Send Message
        </button>
      );
    }

    return (
      <div>
        <h2>Assignment 5 - Child → Parent Communication</h2>

        <Child sendMessage={setMessage} />

        <h3>Message: {message}</h3>
      </div>
    );
  }
  function Assignment6() {
    const [name, setName] = useState("");

    function Input({ name, setName }) {
      return (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
      );
    }

    function Display({ name }) {
      return <h3>Name: {name}</h3>;
    }

    return (
      <div>
        <h2>Assignment 6 - Lifting State Up</h2>

        <Input name={name} setName={setName} />

        <Display name={name} />
      </div>
    );
  }
  function Assignment7() {
    const [present, setPresent] = useState(0);

    const totalStudents = 50;
    const absent = totalStudents - present;

    return (
      <div>
        <h2>Assignment 7 - Student Attendance Manager</h2>

        <h3>Total Students: {totalStudents}</h3>
        <h3>Present: {present}</h3>
        <h3>Absent: {absent}</h3>

        <button
          onClick={() => {
            if (present < totalStudents) {
              setPresent(present + 1);
            }
          }}
        >
          Present +
        </button>

        <button
          onClick={() => {
            if (present > 0) {
              setPresent(present - 1);
            }
          }}
        >
          Present -
        </button>

        <button onClick={() => setPresent(0)}>Reset</button>
      </div>
    );
  }
  function Assignment8() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <div>
        <h2>Assignment 8 - Login Status Application</h2>

        <h3>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</h3>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
  function Assignment9() {
    const [students, setStudents] = useState([
      "Rehan",
      "Rahul",
      "Arun",
      "Akhil",
    ]);

    function addStudent() {
      setStudents([...students, "New Student"]);
    }

    return (
      <div>
        <h2>Assignment 9 - Student List</h2>

        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>

        <button onClick={addStudent}>Add Student</button>
      </div>
    );
  }
  function Assignment10() {
    const [search, setSearch] = useState("");

    const students = ["Rehan", "Rahul", "Arun", "Akhil", "Riya", "Anjali"];

    const filteredStudents = students.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <div>
        <h2>Assignment 10 - Student Search</h2>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Student"
        />

        <ul>
          {filteredStudents.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
      </div>
    );
  }
  function Assignment11() {
    const [studentName, setStudentName] = useState("");

    function StudentInput({ studentName, setStudentName }) {
      return (
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="Enter Student Name"
        />
      );
    }

    function StudentDisplay({ studentName }) {
      return <h3>Student Name: {studentName}</h3>;
    }

    function StudentDashboard() {
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

    return (
      <div>
        <h2>Assignment 11 - Component Communication</h2>

        <StudentDashboard />
      </div>
    );
  }
  function Assignment12() {
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

    function StudentCard({ name, roll, course }) {
      return (
        <div className="card">
          <h3>{name}</h3>
          <p>Roll Number: {roll}</p>
          <p>Course: {course}</p>
        </div>
      );
    }

    return (
      <div>
        <h2>Assignment 12 - Reusable Student Components</h2>

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
  function Assignment13() {
    function Header() {
      return (
        <header>
          <h2>Header</h2>
        </header>
      );
    }

    function Navbar() {
      return (
        <nav>
          <p>Home | Students | Attendance</p>
        </nav>
      );
    }

    function StudentCard({ name, roll }) {
      return (
        <div className="card">
          <h3>{name}</h3>
          <p>Roll Number: {roll}</p>
        </div>
      );
    }

    function StudentList() {
      const students = [
        { name: "Rehan", roll: "101" },
        { name: "Rahul", roll: "102" },
        { name: "Arun", roll: "103" },
      ];

      return (
        <div>
          <h3>Student List</h3>

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

    function Attendance() {
      const [present, setPresent] = useState(0);

      return (
        <div>
          <h3>Present: {present}</h3>

          <button onClick={() => setPresent(present + 1)}>Present +</button>

          <button
            onClick={() => {
              if (present > 0) {
                setPresent(present - 1);
              }
            }}
          >
            Present -
          </button>
        </div>
      );
    }

    function Main() {
      return (
        <main>
          <StudentList />
          <Attendance />
        </main>
      );
    }

    function Footer() {
      return (
        <footer>
          <p>Footer</p>
        </footer>
      );
    }

    return (
      <div>
        <h2>Assignment 13 - Component Hierarchy</h2>

        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
  function Assignment14() {
    const [studentName, setStudentName] = useState("Rehan");

    function Child({ studentName, changeName }) {
      return (
        <div>
          <h3>Child Student Name: {studentName}</h3>

          <button onClick={() => changeName("Rahul")}>Change Name</button>
        </div>
      );
    }

    return (
      <div>
        <h2>Assignment 14 - State vs Props</h2>

        <h3>Parent Student Name: {studentName}</h3>

        <Child studentName={studentName} changeName={setStudentName} />
      </div>
    );
  }
  function Assignment15() {
    const [students, setStudents] = useState([]);
    const [present, setPresent] = useState(0);

    function Header() {
      return (
        <header>
          <h1>Student Management Dashboard</h1>
        </header>
      );
    }
    function StudentForm({ addStudent }) {
      const [student, setStudent] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        semester: "",
      });

      function handleChange(e) {
        setStudent({
          ...student,
          [e.target.name]: e.target.value,
        });
      }

      function handleSubmit(e) {
        e.preventDefault();

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
      }

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

    function StudentCard({ student }) {
      const { name, email, phone, course, semester } = student;

      return (
        <div className="card">
          <h3>{name}</h3>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Course: {course}</p>
          <p>Semester: {semester}</p>
        </div>
      );
    }

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

    function Attendance() {
      const totalStudents = 50;
      const absent = totalStudents - present;

      return (
        <div>
          <h2>Attendance</h2>

          <p>Total Students: {totalStudents}</p>
          <p>Present: {present}</p>
          <p>Absent: {absent}</p>

          <button
            onClick={() => {
              if (present < totalStudents) {
                setPresent(present + 1);
              }
            }}
          >
            Present +
          </button>

          <button
            onClick={() => {
              if (present > 0) {
                setPresent(present - 1);
              }
            }}
          >
            Present -
          </button>

          <button onClick={() => setPresent(0)}>Reset</button>
        </div>
      );
    }

    function Footer() {
      return (
        <footer>
          <p>Student Management Dashboard © 2026</p>
        </footer>
      );
    }

    function addStudent(student) {
      setStudents([
        ...students,
        {
          ...student,
          id: Date.now(),
        },
      ]);
    }

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
  function displayAssignment() {
    switch (assignment) {
      case "3":
        return <Assignment3 />;

      case "6":
        return <Assignment6 />;

      case "1":
        return <Assignment1 />;

      case "2":
        return <Assignment2 />;

      case "4":
        return <Assignment4 />;

      case "5":
        return <Assignment5 />;

      case "7":
        return <Assignment7 />;

      case "8":
        return <Assignment8 />;

      case "9":
        return <Assignment9 />;

      case "10":
        return <Assignment10 />;

      case "11":
        return <Assignment11 />;

      case "12":
        return <Assignment12 />;

      case "13":
        return <Assignment13 />;

      case "14":
        return <Assignment14 />;

      case "15":
        return <Assignment15 />;

      default:
        return <Assignment3 />;
    }
  }

  return (
    <div className="app">
      <h1>React Practical Assignments</h1>

      <select
        value={assignment}
        onChange={(e) => setAssignment(e.target.value)}
      >
        <option value="3">Assignment 3 - Controlled Student Input</option>

        <option value="6">Assignment 6 - Lifting State Up</option>

        <option value="1">Assignment 1 - Counter</option>

        <option value="2">Assignment 2 - Student Information Card</option>

        <option value="4">Assignment 4 - Student Registration Form</option>

        <option value="5">Assignment 5 - Child → Parent Communication</option>

        <option value="7">Assignment 7 - Student Attendance Manager</option>

        <option value="8">Assignment 8 - Login Status Application</option>

        <option value="9">Assignment 9 - Student List</option>

        <option value="10">Assignment 10 - Student Search</option>

        <option value="11">Assignment 11 - Component Communication</option>

        <option value="12">Assignment 12 - Reusable Student Components</option>

        <option value="13">Assignment 13 - Component Hierarchy</option>

        <option value="14">Assignment 14 - State vs Props</option>

        <option value="15">
          Assignment 15 - Final Student Management Dashboard
        </option>
      </select>

      <hr />

      {displayAssignment()}
    </div>
  );
}

export default App;
