const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const router = require('./routes/routers')
const cors = require('cors')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors({
    origin:""
}))


app.use('/', router)




app.listen(4000, () => { console.log("Server is running.") })