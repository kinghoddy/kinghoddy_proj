const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9000;

// Middle wares
app.use(cors());

const mongoURI = `mongodb+srv://admin:whiteman5@cluster0.v5gdi.mongodb.net/kinghoddyDB?retryWrites=true&w=majority`;

app.listen(port, () => {
  console.log("Listening on port ", port);
});
