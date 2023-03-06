const express = require('express')
const router = express.Router()
const dbschema = require('../models/database')

router.get('/', (req, res) => res.send({message:"Welcome to crud api"}))

router.get('/yourapi', (req, res) => {
    res.send({data : "Here is your data"})
})

router.post('/createapi', (req, res)=>{
    //res.send({data : "Create a new data"})
    const dataschema = new dbschema({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })

    dataschema.save().then(data => {
        res.send(data)
    }).catch((err)=>{
        res.json({message:err})
    })
})


router.put('/updateapi', (req, res)=>{
    res.send({data : "Update a data"})
})

router.delete('/deleteapi', (req, res)=>{
    res.send({date: "Delete a data"})
})


module.exports = router