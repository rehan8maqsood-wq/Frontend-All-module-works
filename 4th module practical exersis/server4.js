import express from "express";

const app = express();

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
  }
];

app.delete("/students/:id", (req, res) => {
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
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});