const express = require('express');
const app = express();

app.use(express.json());

// Base de datos simulada
let users = [];

// 🔹 CREATE
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send({ message: "User created", user });
});

// 🔹 READ
app.get('/users', (req, res) => {
  res.send(users);
});

// 🔹 UPDATE
app.put('/users/:id', (req, res) => {
  const id = req.params.id;

  if (!users[id]) {
    return res.status(404).send("User not found");
  }

  users[id] = req.body;
  res.send({ message: "User updated", user: users[id] });
});

// 🔹 DELETE
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  if (!users[id]) {
    return res.status(404).send("User not found");
  }

  users.splice(id, 1);
  res.send({ message: "User deleted" });
});

// Servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
hotfix/fix-date-format

app.post('/login', (req, res) => {
  res.send("Login exitoso");
});
const currentDate = new Date().toISOString();
console.log(currentDate);

feature/payment-api-integration
app.post('/payment', (req, res) => {
  res.send("Pago procesado");
});

 feature/validate-user-input
if (!req.body.name) {
  return res.status(400).send("Nombre requerido");
}

 feature/user-dashboard
app.get('/dashboard', (req, res) => {
  res.send("Dashboard del usuario");

app.post('/login', (req, res) => {
  res.send("Login exitoso");
 develop
});
develop
develop
 develop
