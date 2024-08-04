require('dotenv').config()
const express = require('express') /* require model syntax */

const app = express()

const port = 4000

githubData = {
    id:1,
    name:'aryan'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('aryanmandla')
})

app.get('/login',(req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/github',(req, res) => {
    res.json(githubData)
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})