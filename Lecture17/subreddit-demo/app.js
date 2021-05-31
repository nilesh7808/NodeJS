const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send("THIS IS HOME ROUTE")
})


app.get('/r/:subredit', (req, res) => {

    const { subredit } = req.params;

    res.send(`<h1>THIS IS ${subredit} SUBREDDIT</h1>`)
})


app.listen(8080, () => {
    console.log("server running at port 8080");
})