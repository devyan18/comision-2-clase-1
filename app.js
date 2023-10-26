import express from "express"

const app = express()

app.listen(3000)
console.log("server on port 3000")

// GET --> Obtener recursos
// POST --> Crear recursos
// PATCH --> Editar recursos ya creados de forma parcial
// DELETE --> Eliminar recursos
// PUT --> Editar un recursos si existe y sino, lo crea.
