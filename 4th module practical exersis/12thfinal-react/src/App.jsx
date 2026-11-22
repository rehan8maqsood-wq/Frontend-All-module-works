import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [message, setMessage] = useState("");

  const login = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      }
    );

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setMessage(data.message);
      loadStudents(data.token);
    } else {
      setMessage(data.message);
    }
  };

  const loadStudents = async (currentToken = token) => {
    const response = await fetch(
      "http://localhost:5000/api/students",
      {
        headers: {
          Authorization: `Bearer ${currentToken}`
        }
      }
    );

    const data = await response.json();

    if (response.ok) {
      setStudents(data);
    } else {
      setMessage(data.message);
    }
  };

  const addStudent = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "http://localhost:5000/api/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          email,
          course
        })
      }
    );

    const data = await response.json();

    setMessage(data.message);

    if (response.ok) {
      setName("");
      setEmail("");
      setCourse("");

      loadStudents();
    }
  };

  const deleteStudent = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/students/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    setMessage(data.message);

    if (response.ok) {
      loadStudents();
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setStudents([]);
    setMessage("Logged out successfully");
  };

  if (!token) {
    return (
      <div className="container">
        <h1>Secure Student Portal</h1>

        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>{message}</p>

        <hr />

        <p>
          Admin: admin / admin123
        </p>

        <p>
          Student: student / student123
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Secure Student Service Portal</h1>

      <button onClick={logout}>
        Logout
      </button>

      <button onClick={() => loadStudents()}>
        Load Students
      </button>

      <p>{message}</p>

      <hr />

      <h2>Add Student</h2>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) =>
            setCourse(e.target.value)
          }
        />

        <button type="submit">
          Add Student
        </button>
      </form>

      <hr />

      <h2>Students</h2>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <h3>{student.name}</h3>

          <p>
            Email: {student.email}
          </p>

          <p>
            Course: {student.course}
          </p>

          <button
            onClick={() =>
              deleteStudent(student.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;