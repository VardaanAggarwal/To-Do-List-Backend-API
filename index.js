const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
var todos = require("./todos.json");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());

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
    id: Math.floor(Math.random() * 100000),
  };

  todos.push(todo);
  fs.writeFile("./todos.json", JSON.stringify(todos), (err, data) => {
    res.status(201).json({ status: "Done!" });
  });
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
      status: "Done!",
    });
  }
});
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);
  // console.log(todo);
  // console.log(id);
  if (todo) {
    todos = todos.filter((todo) => todo.id !== id);
    res.status(200).json({
      status: "Done!",
    });
  } else {
    res.status(404).json({
      error: "To do not found.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Your app listening on port ${PORT}`);
});
