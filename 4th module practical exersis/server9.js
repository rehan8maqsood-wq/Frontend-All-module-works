import express from "express";

const app = express();

function logger(req, res, next) {
  console.log(
    `${new Date().toLocaleString()} - ${req.method} - ${req.url}`
  );

  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "Home page"
  });
});

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Amit"
    },
    {
      id: 2,
      name: "Rahul"
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});