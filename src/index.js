const express = require("express");
const mongoose = require("mongoose");
const { swaggerUi, swaggerSpec } = require("../swagger");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const authRoutes = require("./routes/auth");


const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Too many signup attempts, please try again later." }
});

app.use("/auth/signup", signupLimiter); 
app.use("/auth", authRoutes);


mongoose.connect("mongodb://localhost:27017/auth-service")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(3000, () => console.log("🚀 Server running on port 3000"));
  })
  .catch(err => console.error("DB Connection Error:", err));
