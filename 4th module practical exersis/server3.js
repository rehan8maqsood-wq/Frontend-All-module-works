import express from "express";

const app = express();

app.use(express.json());

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

app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({
      message: "Name, email and course are required"
    });
  }

  student.name = name;
  student.email = email;
  student.course = course;

  res.json({
    message: "Student updated successfully",
    student
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});