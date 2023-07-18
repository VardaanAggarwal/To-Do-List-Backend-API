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
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  // console.log(todo);
  // console.log(id);
  if (todo) {
    res.status(200).json(todo);
  } else {
    res.status(404).json({
      error: "To do not found.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`);
});
