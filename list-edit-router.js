const express = require('express');
const listEditRouter = express.Router();

listEditRouter.post('/create-task', (req, res) => {
  // Lógica para crear una tarea
});

listEditRouter.delete('/delete-task', (req, res) => {
  // Lógica para eliminar una tarea
});

listEditRouter.put('/update-task', (req, res) => {
  // Lógica para actualizar una tarea
});

module.exports = listEditRouter;
