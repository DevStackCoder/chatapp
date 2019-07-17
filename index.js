const express = require('express')

const app = express()

app.get('/ping', (req, res)=>{
    res.send('pong')
})

app.listen(80, ()=>{
    console.log('server is running on port 80')
})