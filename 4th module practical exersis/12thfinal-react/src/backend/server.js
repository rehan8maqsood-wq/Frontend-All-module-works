import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

// --------------------
// Students
// --------------------

let students = [
  {
    id: 1,
    name: "Amit",
    email: "amit@gmail.com",
    course: "BCA"
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    course: "BCA"
  },
  {
    id: 3,
    name: "Priya",
    email: "priya@gmail.com",
    course: "BCA"
  }
];

// --------------------
// Logging Middleware
// --------------------

function logger(req, res, next) {
  console.log(
    `${new Date().toLocaleString()} - ${req.method} - ${req.url}`
  );

  next();
}

app.use(logger);

// --------------------
// Authentication
// --------------------

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Login required"
    });
  }

  if (token === "Bearer admintoken123") {
    req.user = {
      name: "Admin",
      role: "admin"
    };
  } else if (token === "Bearer studenttoken123") {
    req.user = {
      name: "Student",
      role: "student"
    };
  } else {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  next();
}

// --------------------
// Authorization
// --------------------

function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin access required"
    });
  }

  next();
}

// --------------------
// Login
// --------------------

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === "admin" &&
    password === "admin123"
  ) {
    return res.json({
      message: "Login successful",
      token: "admintoken123",
      role: "admin"
    });
  }

  if (
    username === "student" &&
    password === "student123"
  ) {
    return res.json({
      message: "Login successful",
      token: "studenttoken123",
      role: "student"
    });
  }

  res.status(401).json({
    message: "Invalid username or password"
  });
});

// --------------------
// GET Students
// --------------------

app.get(
  "/api/students",
  authenticate,
  (req, res) => {
    res.json(students);
  }
);

// --------------------
// POST Student
// --------------------

app.post(
  "/api/students",
  authenticate,
  requireAdmin,
  (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) {
      return res.status(400).json({
        message: "Name, email and course are required"
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        message: "Invalid email"
      });
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      course
    };

    students.push(newStudent);

    res.status(201).json({
      message: "Student added successfully",
      student: newStudent
    });
  }
);

// --------------------
// PUT Student
// --------------------

app.put(
  "/api/students/:id",
  authenticate,
  requireAdmin,
  (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(
      (student) => student.id === id
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    const { name, email, course } = req.body;

    if (!name || !email || !course) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    student.name = name;
    student.email = email;
    student.course = course;

    res.json({
      message: "Student updated successfully",
      student
    });
  }
);

// --------------------
// DELETE Student
// --------------------

app.delete(
  "/api/students/:id",
  authenticate,
  requireAdmin,
  (req, res) => {
    const id = Number(req.params.id);

    const studentExists = students.some(
      (student) => student.id === id
    );

    if (!studentExists) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    students = students.filter(
      (student) => student.id !== id
    );

    res.json({
      message: "Student deleted successfully"
    });
  }
);

// --------------------
// Admin Endpoint
// --------------------

app.get(
  "/api/admin",
  authenticate,
  requireAdmin,
  (req, res) => {
    res.json({
      message: "Welcome Admin",
      user: req.user
    });
  }
);

app.listen(5000, () => {
  console.log(
    "Backend running on http://localhost:5000"
  );
});