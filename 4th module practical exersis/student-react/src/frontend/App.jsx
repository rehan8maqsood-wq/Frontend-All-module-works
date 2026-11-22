import { useCallback, useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api";

function App() {
  const [students, setStudents] = useState([]);
  const [token, setToken] = useState("");
  const [loginChoice, setLoginChoice] = useState("student");
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: ""
  });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isAdmin = token === "admintoken123";

  const request = useCallback(
    async (path, options = {}) => {
      const headers = {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers
      };

      const response = await fetch(`${API}${path}`, {
        ...options,
        headers
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      return data;
    },
    [token]
  );

  const loadStudents = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await request("/students");
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  function showMessage(text) {
    setMessage(text);
    setError("");
  }

  async function login() {
    const selectedToken =
      loginChoice === "admin"
        ? "admintoken123"
        : "studenttoken123";

    setToken(selectedToken);
    setMessage(
      loginChoice === "admin"
        ? "Demo administrator selected."
        : "Demo student selected."
    );
    setError("");
  }

  function logout() {
    setToken("");
    setEditId(null);
    setForm({ name: "", email: "", course: "" });
    showMessage("Logged out.");
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!token) {
      setError("Select a demo login before adding or editing.");
      return;
    }

    try {
      const editing = editId !== null;

      const result = await request(
        editing ? `/students/${editId}` : "/students",
        {
          method: editing ? "PUT" : "POST",
          body: JSON.stringify(form)
        }
      );

      setForm({ name: "", email: "", course: "" });
      setEditId(null);
      showMessage(result.message);
      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  }

  function startEdit(student) {
    setEditId(student.id);
    setForm({
      name: student.name,
      email: student.email,
      course: student.course
    });
    setMessage("Editing student #" + student.id);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteStudent(id) {
    if (!token) {
      setError("Select a demo login before deleting.");
      return;
    }

    if (!window.confirm("Delete this student?")) return;

    try {
      const result = await request(`/students/${id}`, {
        method: "DELETE"
      });
      showMessage(result.message);
      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  }

  async function testProtected() {
    try {
      const result = await request("/protected");
      showMessage(result.message + " — Role: " + result.user.role);
    } catch (err) {
      setError(err.message);
    }
  }

  async function testAdmin() {
    try {
      const result = await request("/admin");
      showMessage(result.message);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <main className="portal">
      <header className="hero">
        <div className="brand">
          <span className="brand-icon">SS</span>
          <span>Secure Student Service Portal</span>
        </div>
        <p>Manage student records from one dashboard.</p>
        <div className="hero-stats">
          <div>
            <strong>{students.length}</strong>
            <span>Total students</span>
          </div>
          <div>
            <strong>{token ? "Active" : "Guest"}</strong>
            <span>Demo session</span>
          </div>
        </div>
      </header>

      <section className="panel security-panel">
        <div>
          <h2>Access control</h2>
          <p>
            {token
              ? `Signed in as ${isAdmin ? "Administrator" : "Student"} (demo)`
              : "Choose a demo role to use protected operations."}
          </p>
        </div>

        <div className="login-controls">
          <select
            value={loginChoice}
            onChange={(e) => setLoginChoice(e.target.value)}
            aria-label="Choose demo role"
          >
            <option value="student">Student demo</option>
            <option value="admin">Admin demo</option>
          </select>
          <button onClick={login}>Demo login</button>
          {token && (
            <button className="secondary" onClick={logout}>
              Logout
            </button>
          )}
        </div>

        <div className="security-actions">
          <button className="secondary" onClick={testProtected}>
            Test protected API
          </button>
          <button className="secondary" onClick={testAdmin}>
            Test admin API
          </button>
        </div>
      </section>

      {message && (
        <div className="notice success" role="status">
          {message}
          <button onClick={() => setMessage("")} aria-label="Dismiss message">
            ×
          </button>
        </div>
      )}

      {error && (
        <div className="notice failure" role="alert">
          {error}
          <button onClick={() => setError("")} aria-label="Dismiss error">
            ×
          </button>
        </div>
      )}

      <section className="panel form-panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              {editId !== null ? "UPDATE RECORD" : "NEW RECORD"}
            </span>
            <h2>{editId !== null ? "Edit student" : "Add a student"}</h2>
          </div>
          {editId !== null && (
            <button
              className="secondary"
              onClick={() => {
                setEditId(null);
                setForm({ name: "", email: "", course: "" });
              }}
            >
              Cancel edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Full name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter student name"
                required
              />
            </label>

            <label>
              Email address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />
            </label>

            <label>
              Course
              <input
                name="course"
                value={form.course}
                onChange={handleChange}
                placeholder="e.g. BCA"
                required
              />
            </label>
          </div>

          <button type="submit" disabled={!token}>
            {editId !== null ? "Save changes" : "Add student"}
          </button>
          {!token && (
            <p className="hint">Select a demo login to enable this form.</p>
          )}
        </form>
      </section>

      <section className="panel table-panel">
        <div className="section-heading">
          <div>
            <span className="eyebrow">STUDENT DIRECTORY</span>
            <h2>All students</h2>
          </div>
          <button className="secondary" onClick={loadStudents}>
            Refresh
          </button>
        </div>

        {loading ? (
          <p>Loading student records...</p>
        ) : students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Student</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>#{student.id}</td>
                    <td className="student-name">{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <span className="course-tag">{student.course}</span>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button
                          className="small secondary"
                          disabled={!token}
                          onClick={() => startEdit(student)}
                        >
                          Edit
                        </button>
                        <button
                          className="small danger"
                          disabled={!token}
                          onClick={() => deleteStudent(student.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <footer>
        React frontend · Express REST API · CORS · Middleware
      </footer>
    </main>
  );
}

export default App;