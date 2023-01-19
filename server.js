const express = require('express')
const app = express()
const PORT = 8000

app.use(express.static("public"))

app.use("public/assets", express.static(__dirname + "public/assets"));

app.listen(PORT, ()=>{
  console.log(`The server is now running on port ${PORT}!`)
})