# TODO App - REST API Documentation

RESTful API Designed in Node.js for a very simple TODO application.

## Index

- [Requirements](#requirements)
- [Installation](#installation)
- [Schema](#schema)
- [Authentication](#authentication)
- [Root End-Point](#root-end-point)
- [Core Resources](#core-resources)

## Requirements

- [node & npm](http://nodejs.org)
<!-- - [MongoDB](https://www.mongodb.com/): Make sure you have your own local or remote MongoDB database URI configured in `credentials/mongo.js` -->
- [PostMan](https://www.getpostman.com/)

## Installation

1. Clone the repository: `git clone https://github.com/VardaanAggarwal/To-Do-List-Backend-API`
2. Install the application packages: `npm install`
3. Start the server: `node index.js` or `npm start`
4. Open PostMan and make a `GET` request to `http://localhost:3000/todos`

## Schema

1. All API access is over HTTP, and accessed from `http://localhost:3000/todos`.
2. All data is sent and received as JSON.
   <!-- 3. Blank fields are included as `null` instead of being omitted. -->
   <!-- 4. All timestamps return in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ` -->

## Authentication

There are no authentication implemented yet. So, all the end-points are open.

## Root End-Point

`http://localhost:3000/todos`

## Core Resources

### Todos

`Todos` object represents snapshot of a specific Todo with a unique Id. You can retrieve it to see details about the Todo.

#### Schema

```javascript
{
    title: "Build a Todo backend API",
    completed: true,
    description: "I have to build a RESTful API for a simple TODO application in NODE.JS",
    id: 1;
}
```

#### End-Points

| Method   | End-Point    | Description             |
| -------- | ------------ | ----------------------- |
| `GET`    | `/todos`     | List all _todos_        |
| `POST`   | `/todos`     | Create a new _todo_     |
| `GET`    | `/todos/:id` | Fetch a specific _todo_ |
| `PUT`    | `/todos/:id` | Edit existing _todo_    |
| `DELETE` | `/todos/:id` | Delete existing _todo_  |
