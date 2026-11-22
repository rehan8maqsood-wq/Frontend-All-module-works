const express = require("express");

const app = express();

let students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Amit", age: 21 },
  { id: 3, name: "Anu", age: 20 },
];

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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
