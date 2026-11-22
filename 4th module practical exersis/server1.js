import express from "express";

const app = express();

const students = [
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
  },
  {
    id: 4,
    name: "Anjali",
    email: "anjali@gmail.com",
    course: "BCA"
  },
  {
    id: 5,
    name: "Arun",
    email: "arun@gmail.com",
    course: "BCA"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});