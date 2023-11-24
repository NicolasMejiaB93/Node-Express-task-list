// list-api-router.js
const express = require('express');
const listApiRouter = express.Router();

listApiRouter.use('/create-task', (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Bad Request: Cuerpo vacío en solicitud POST' });
  }
  next();
});

listApiRouter.post('/create-task', (req, res) => {
  tasks.push({ id: Date.now().toString(), ...req.body });
  res.status(201).json({ message: 'Tarea creada exitosamente' });
});

listApiRouter.put('/update-task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json({ message: 'Tarea actualizada exitosamente' });
  } else {
    res.status(404).json({ error: 'Not Found: Tarea no encontrada' });
  }
});

listApiRouter.delete('/delete-task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Tarea eliminada exitosamente' });
  } else {
    res.status(404).json({ error: 'Not Found: Tarea no encontrada' });
  }
});

listApiRouter.get('/tasks', (req, res) => {
  res.json({ tasks });
});

listApiRouter.get('/completed-tasks', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json({ completedTasks });
});

listApiRouter.get('/incomplete-tasks', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json({ incompleteTasks });
});

listApiRouter.get('/task/:taskId', (req, res) => {
  const taskId = req.params.taskId;
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    res.json({ task });
  } else {
    res.status(404).json({ error: 'Not Found: Tarea no encontrada' });
  }
});

module.exports = listApiRouter;
