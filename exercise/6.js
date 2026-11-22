const express = require("express");

const app = express();

app.use(express.json());

app.post("/students", (req, res) => {
  const { name, age } = req.body;

  if (!name || age === undefined) {
    return res.status(400).json({
      error: "Name and age are required",
    });
  }

  const student = {
    id: 1,
    name: name,
    age: age,
  };

  res.status(201).json(student);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
