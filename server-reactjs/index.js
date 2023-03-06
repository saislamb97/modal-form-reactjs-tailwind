const express = require('express')
const app = express()

app.get('/', (req, res) => {res.send("Welcome to crud server")})


app.listen(4000, () => { console.log("Server is running.") })