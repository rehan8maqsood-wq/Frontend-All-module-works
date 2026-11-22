import express from "express";

const app = express();

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Login required"
    });
  }

  if (token !== "Bearer mytoken123") {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  req.user = {
    name: "Rehan",
    role: "student"
  };

  next();
}

app.get("/public", (req, res) => {
  res.json({
    message: "This is a public endpoint"
  });
});

app.get(
  "/protected",
  authenticate,
  (req, res) => {
    res.json({
      message: "You can access the protected endpoint",
      user: req.user
    });
  }
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});