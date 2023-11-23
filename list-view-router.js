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
});

listViewRouter.get('/incomplete-tasks', (req, res) => {
  // Lógica para listar tareas incompletas
});

module.exports = listViewRouter;
