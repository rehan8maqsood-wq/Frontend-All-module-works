const express = require("express");

const app = express();

const students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Amit", age: 21 },
  { id: 3, name: "Anu", age: 20 },
];

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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
