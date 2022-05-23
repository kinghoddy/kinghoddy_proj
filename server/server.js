const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");

const app = express();
const port = process.env.PORT || 9000;
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}cluster0.v5gdi.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

// Middle wares
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));

// Routes
app.use(routes);

// Error handling
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message;
  res.status(statusCode).json({ message });
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});

mongoose
  .connect(mongoURI)
  .then((result) => {
    console.log("Connected To DB");
  })
  .catch((error) => {
    console.log("Cannot connect ti DB", error);
  });
