const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config();

const secretKey = process.env.JWT_SECRET;

const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');
const listApiRouter = require('./list-api-router');  // Nueva importación

const verifyToken = (req, res, next) => {
  // Lógica de verificación del token
};

app.get('/protected-route', verifyToken, (req, res) => {
  // Lógica para la ruta protegida
});

// Middleware para gestionar métodos HTTP válidos
app.use((req, res, next) => {
  const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  if (!validMethods.includes(req.method)) {
    return res.status(400).send("Bad Request: Método HTTP no válido");
  }
  next();
});

app.use(express.json());

const tasks = [
  { id: '1', isCompleted: false, description: 'SACAR EL PERRO' },
  { id: '2', isCompleted: true, description: 'ESTUDIAR ADA' },
  { id: '3', isCompleted: false, description: 'PAGAR SERVICIOS' },
  { id: '4', isCompleted: true, description: 'LAVAR EL CARRO' },
  { id: '5', isCompleted: false, description: 'COMPRAR REGALOS' },
  { id: '6', isCompleted: true, description: 'VISITAR ABUELA' },
  { id: '7', isCompleted: false, description: 'REUNIÓN FAMILIAR' },
  { id: '8', isCompleted: true, description: 'SALIR A TROTAR' },
];

app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);
app.use('/api', listApiRouter);  // Nueva ruta para el API REST

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get("/this-should-exist", (req, res) => {
  res.status(404).send("Not found");
});
