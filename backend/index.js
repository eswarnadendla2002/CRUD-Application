const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const UserModel = require("./models/Users");
app.use(cors());
app.use(express());
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/create", (req, res) => {
  let obj = {
    username: req.body.username[0],
    email: req.body.email[0],
    age: req.body.age[0],
    location: req.body.location[0],
  };
  UserModel.create(obj)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/user", async (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUsers/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
      location: req.body.location,
    }
  )
    .then((res) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findOneAndDelete({ _id: id })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
app.listen(5550, () => {
  console.log("Server started at port 5550!");
});
