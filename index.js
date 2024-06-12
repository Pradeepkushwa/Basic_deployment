require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/item', (req, res)=>{
      res.send('this is the lol item')
})

app.get('/weather', (req, res)=>{
    res.send('today weather is amazing')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})