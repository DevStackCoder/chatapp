import express from 'express'

const app = express()

app.get('/ping', (req, res)=>{
    res.send('ping')
})

app.listen(80, ()=>{
    console.log('server is running on port 80')
})