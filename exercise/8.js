const express = require("express");

const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Rahul", age: 20, course: "BCA" },
  { id: 2, name: "Amit", age: 21, course: "BCA" },
  { id: 3, name: "Anu", age: 20, course: "BCA" },
];
app.get("/students", (req, res) => {
  res.json(students);
});
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  res.json(student);
});
app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  if (!name || age === undefined) {
    return res.status(400).json({
      error: "Name and age are required",
    });
  }

  const newStudent = {
    id: students.length + 1,
    name: name,
    age: age,
    course: course,
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  const { name, age, course } = req.body;

  if (!name || age === undefined) {
    return res.status(400).json({
      error: "Name and age are required",
    });
  }

  student.name = name;
  student.age = age;
  student.course = course;

  res.json(student);
});

app.patch("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  const { name, age, course } = req.body;

  if (name !== undefined) {
    student.name = name;
  }

  if (age !== undefined) {
    student.age = age;
  }

  if (course !== undefined) {
    student.course = course;
  }

  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  const deletedStudent = students.splice(index, 1);

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0],
  });
});
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    error: "Internal Server Error",
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
