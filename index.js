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
app.post("/todos", (req, res) => {
  const todo = {
    title: req.body.title,
    completed: req.body.completed,
    description: req.body.description,
    id: id,
  };
  id++;
  todos.push(todo);
  res.status(201).json(todo);
});
app.put("/todos/:id", (req, res) => {
  const todo = todos.findIndex((todo) => todo.id === parseInt(req.params.id));
  // console.log(todo);
  if (todo < 0) {
    res.status(404).json({
      message: "NOT FOUND !",
    });
  } else {
    const id = todos[todo].id;
    todos[todo] = {
      title: req.body.title,
      completed: req.body.completed,
      description: req.body.description,
      id: id,
    };
    res.status(200).json({
      message: "DONE SURR !",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`);
});
