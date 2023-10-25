const { createServer } = require("node:http")

const servidor = createServer((req, res) => {
  res.end("Hola desde mi servidor http")
})

servidor.listen(3000)
console.log("Server listening on port 3000")