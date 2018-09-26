const express = require("express");
const userRoutes = express.Router();
const User = require("../models/users");


userRoutes.get("/:id", (req,res) => {
  console.log("hello");
  User.find({id: req.params.id}, (err, users) => {
    if(err) return res.status(500).send(err);
    return res.send(users);
  })
})

userRoutes.get("/", (req, res) => {
  User.find( (err, users) => {
    if(err) return res.status(500).send(err);
    return res.send(users)
  })
})


userRoutes.post("/", (req,res) => {
  const newUser = new User(req.body);
  newUser.email = req.query.email;
  newUser.first_name = req.query.first_name;
  newUser.last_name = req.query.last_name;
  newUser.ip = req.query.ip;
  newUser.latitude = req.query.latitude;
  newUser.longitude = req.query.longitude;

  User.find().sort({id: -1}).limit(1).then((response) => {
    newUser.id = response[0].id + 1

      newUser.save(function (err, newUser) {
          if(err) return res.status(500).send(err);
          return res.status(201).send(newUser);
      })
  })
})

userRoutes.put("/:id", (req,res) => {
  User.findOneAndUpdate({id: req.params.id}, req.body, {new:true}, (err, updatedUser) => {
    if(err) return res.status(500).send(err);
    return res.send(updatedUser);
  })
})

userRoutes.delete("/:id", (req, res) => {
  User.findOneAndRemove({ id: req.params.id}, (err, removedUser) => {
    if(err) return res.status(500).send(err);
    return res.status(202).send(removedUser);
  })
})


module.exports = userRoutes;
