const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/tptiers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model("User", userSchema);

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const newUser = new User({ name: req.body.name });
  await newUser.save();
  res.status(201).json(newUser);
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
