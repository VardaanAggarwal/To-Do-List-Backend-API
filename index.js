const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
let id = 1;
app.use(bodyParser.json());

let todos = [];
app.get("/todos", (req, res) => {
  res.status(200).send(todos);
});

app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`);
});
