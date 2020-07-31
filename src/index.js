const express = require("express");
const morgan = require("morgan");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongoose");

mongoose
  .connect("mongodb://localhost/mevn-database")
  .then((db) => console.log("DB ESTA CONECTADO"))
  .catch((err) => console.log(err));

//Setting

app.set("port", process.env.PORT || 3000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());
//Routes

app.use("/api/tasks", require("./routes/task"));

// Static files

app.use(express.static(__dirname + "/public"));

//Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

module.exports = require;
