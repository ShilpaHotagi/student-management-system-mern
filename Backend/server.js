const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//  Replace with your MongoDB URI
mongoose.connect("mongodb://shilpahotagi137:Shilpa%4026@ac-sdxuoyx-shard-00-00.ln3h7da.mongodb.net:27017,ac-sdxuoyx-shard-00-01.ln3h7da.mongodb.net:27017,ac-sdxuoyx-shard-00-02.ln3h7da.mongodb.net:27017/?ssl=true&replicaSet=atlas-uzbe2t-shard-0&authSource=admin&appName=Cluster1")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

//  Schema
const Student = mongoose.model("Student", {
  name: String,
  email: String,
  rollNumber: String
});


//  CREATE
app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  res.json(student);
});

//  READ
app.get("/students", async (req, res) => {
  const data = await Student.find();
  res.json(data);
});

//  UPDATE
app.put("/students/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

//  DELETE
app.delete("/students/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on 5000"));