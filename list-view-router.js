const express = require('express');
const listViewRouter = express.Router();

// Middleware para gestionar parámetros correctos
listViewRouter.use('/:parametro', (req, res, next) => {
  // Lógica para validar parámetros
  if (req.params.parametro !== 'valido') {
    return res.status(400).send("Bad Request: Parámetro no válido");
  }
  // Lógica adicional si es necesario
  next();
});

listViewRouter.get('/completed-tasks', (req, res) => {
  // Lógica para listar tareas completas
  res.json({ completedTasks: tasks.filter(task => task.isCompleted) });
});

listViewRouter.get('/incomplete-tasks', (req, res) => {
  // Lógica para listar tareas incompletas
  res.json({ incompleteTasks: tasks.filter(task => !task.isCompleted) });
});

module.exports = listViewRouter;
