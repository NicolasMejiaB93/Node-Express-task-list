const express = require('express');
const listViewRouter = express.Router();

listViewRouter.get('/completed-tasks', (req, res) => {
  // Lógica para listar tareas completas
});

listViewRouter.get('/incomplete-tasks', (req, res) => {
  // Lógica para listar tareas incompletas
});

module.exports = listViewRouter;
