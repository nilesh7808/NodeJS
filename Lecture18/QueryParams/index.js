const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("This IS THE ROOT ROUTE")
})

app.get('/search', (req, res) => {
    console.log(req.query);
    res.send("THIS IS A SEARCH PAGE")
})

app.get('/greet', (req, res) => {
    const { username } = req.query;
    res.send(`Hello From ${username}`)
})

app.get('/hello', (req, res) => {
    res.send("<h1>Hello from Nilesh Raj</h1>")
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})