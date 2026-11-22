const express = require("express");

const app = express();

app.get("/students", (req, res) => {
  const course = req.query.course;

  res.json({
    selectedCourse: course,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
