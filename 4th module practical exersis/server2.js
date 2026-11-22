import express from "express";

const app = express();

app.use(express.json());

app.post("/students", (req, res) => {
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

  const student = {
    id: Date.now(),
    name,
    email,
    course
  };

  res.status(201).json({
    message: "Student created successfully",
    student
  });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});