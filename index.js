
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>chai or code and biscuit<h1>')
})

app.get('/login', (req, res) =>{
    res.send('<h2>this is way to file the repo')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})