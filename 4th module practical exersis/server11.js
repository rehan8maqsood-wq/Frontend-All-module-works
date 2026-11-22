import express from "express";

const app = express();

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Login required"
    });
  }

  if (token === "Bearer admintoken123") {
    req.user = {
      name: "Admin",
      role: "admin"
    };
  } else if (token === "Bearer studenttoken123") {
    req.user = {
      name: "Student",
      role: "student"
    };
  } else {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  next();
}

function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin access required"
    });
  }

  next();
}

app.get(
  "/admin",
  authenticate,
  requireAdmin,
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

app.get(
  "/student",
  authenticate,
  (req, res) => {
    res.json({
      message: "Welcome Student"
    });
  }
);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});