const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 7000

app.use(bodyParser.json()); 
app.use("/users", require('./routes/users.js'));

mongoose.connect(`mongodb+srv://scott:pass@cluster0-bi7mm.mongodb.net/test?retryWrites=true`, err => {
  if (err) throw err;
  console.log("DB Connected.")
})


app.listen(7000, () => {
  console.log("Listening in port " + port)
});
