const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const express = require('express');
const app = express();

// Middleware para gestionar métodos HTTP válidos
app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  if (!validMethods.includes(req.method)) {
    return res.status(400).send("Bad Request: Método HTTP no válido");
  }
  next();
});


const tasks = [
  {
    id: '1',
    isCompleted: false,
    description: 'Walk the dog',
  },
  {
    id: '2',
    isCompleted: true,
    description: 'Read a book',
  },
  {
    id: '3',
    isCompleted: false,
    description: 'Write code',
  },
  {
    id: '4',
    isCompleted: true,
    description: 'Exercise',
  },
  {
    id: '5',
    isCompleted: false,
    description: 'Buy groceries',
  },
];

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get("/this-should-exists", (req, res) => {
  res.status(404).send("Not found");
});
