import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Initial five students
let students = [
  { id: 1, name: "Aarav Sharma", email: "aarav@gmail.com", course: "BCA" },
  { id: 2, name: "Priya Kumar", email: "priya@gmail.com", course: "BBA" },
  { id: 3, name: "Rahul Reddy", email: "rahul@gmail.com", course: "BCA" },
  { id: 4, name: "Sneha Nair", email: "sneha@gmail.com", course: "BCom" },
  { id: 5, name: "Arjun Das", email: "arjun@gmail.com", course: "MCA" }
];

// Exercise 9: Custom logging middleware
app.use((req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} | ${req.method} | ${req.url}`
  );
  next();
});

// Exercise 10: Authentication middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Login required" });
  }

  if (token === "Bearer admintoken123") {
    req.user = { name: "Admin", role: "admin" };
  } else if (token === "Bearer studenttoken123") {
    req.user = { name: "Student", role: "student" };
  } else {
    return res.status(401).json({ message: "Invalid token" });
  }

  next();
}

// Exercise 11: Administrator-only authorization
function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied. Admin only."
    });
  }

  next();
}

// Validate student details
function validateStudent(req, res, next) {
  const { name, email, course } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim() ||
    typeof course !== "string" ||
    !course.trim()
  ) {
    return res.status(400).json({
      message: "Name, email and course are required."
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
      message: "Please enter a valid email address."
    });
  }

  next();
}

// Exercise 1: GET five students / all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// Exercise 2: POST a new student
app.post(
  "/api/students",
  authenticate,
  validateStudent,
  (req, res) => {
    const newStudent = {
      id: Math.max(0, ...students.map((s) => s.id)) + 1,
      name: req.body.name.trim(),
      email: req.body.email.trim(),
      course: req.body.course.trim()
    };

    students.push(newStudent);

    res.status(201).json({
      message: "Student added successfully",
      student: newStudent
    });
  }
);

// Exercise 3: PUT - update student information
app.put(
  "/api/students/:id",
  authenticate,
  validateStudent,
  (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Student not found" });
    }

    students[index] = {
      id,
      name: req.body.name.trim(),
      email: req.body.email.trim(),
      course: req.body.course.trim()
    };

    res.json({
      message: "Student updated successfully",
      student: students[index]
    });
  }
);

// Exercise 4: DELETE a student
app.delete("/api/students/:id", authenticate, (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  students = students.filter((s) => s.id !== id);

  res.json({ message: "Student deleted successfully" });
});

// Exercise 10: Protected endpoint
app.get("/api/protected", authenticate, (req, res) => {
  res.json({
    message: "Authentication successful",
    user: req.user
  });
});

// Exercise 11: Admin-only endpoint
app.get(
  "/api/admin",
  authenticate,
  requireAdmin,
  (req, res) => {
    res.json({
      message: "Welcome, administrator! Admin access granted."
    });
  }
);

// Handle invalid API routes
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});