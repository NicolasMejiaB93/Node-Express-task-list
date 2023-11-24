const express = require('express');
const listEditRouter = express.Router();

// Middleware para manejar errores en solicitudes POST
listEditRouter.use('/create-task', (req, res, next) => {
  // Lógica para validar solicitudes POST
  const requiredAttributes = ['isCompleted', 'description'];
  const hasValidAttributes = requiredAttributes.every(attr => req.body[attr]);
  
  if (!hasValidAttributes) {
    return res.status(400).send("Bad Request: Atributos no válidos o faltantes en solicitud POST");
  }
  // Lógica adicional si es necesario
  next();
});

// Middleware para manejar errores en solicitudes PUT
listEditRouter.use('/update-task', (req, res, next) => {
  // Lógica para validar solicitudes PUT
  const requiredAttributes = ['id', 'isCompleted', 'description'];
  const hasValidAttributes = requiredAttributes.every(attr => req.body[attr]);
  
  if (!hasValidAttributes) {
    return res.status(400).send("Bad Request: Atributos no válidos o faltantes en solicitud PUT");
  }
  // Lógica adicional si es necesario
  next();
});

listEditRouter.post('/create-task', (req, res) => {
  // Lógica para crear una tarea
  res.status(201).json({ message: 'Tarea creada exitosamente' });
});

listEditRouter.delete('/delete-task/:taskId', (req, res) => {
  // Lógica para eliminar una tarea
  res.json({ message: 'Tarea eliminada exitosamente' });
});

listEditRouter.put('/update-task/:taskId', (req, res) => {
  // Lógica para actualizar una tarea
  res.json({ message: 'Tarea actualizada exitosamente' });
});

module.exports = listEditRouter;
