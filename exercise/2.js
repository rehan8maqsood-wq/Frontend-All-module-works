const express = require("express");

const app = express();

const students = [
  { id: 1, name: "Rahul", age: 20 },
  { id: 2, name: "Amit", age: 21 },
  { id: 3, name: "Anu", age: 20 },
  { id: 4, name: "Arjun", age: 22 },
  { id: 5, name: "Sneha", age: 21 },
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
