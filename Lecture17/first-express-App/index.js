const express = require('express');
const app = express()
    // console.log(app);
    // app.use((req, res) => {
    //     // console.log(req);
    //     // console.log(res);
    //     // res.send("Hello From the Server. This is the response for the request that you made");
    //     res.send('<h1>This is an incoming HTTP response</h1>');
    //     // res.status(404).send("Aww can not find requested URL:");

// })

// Routing

app.get('/', (req, res) => {
    res.send("<h1>This is Root Route/Path</h1>");
})

app.get('/cats', (req, res) => {
    res.send("<h1>Meowwww!</h1>");
})

// app.post('/cats', (req, res) => {
//     res.send("<h3>Meowwww Meowwww Meowwww Meowwww . This is a post request and different from get request!</h3>");
// })

app.get('/dogs', (req, res) => {
    res.send("<h1>Woof Woof</h1>");
})

app.get('*', (req, res) => {
    res.send('This is invalid path');
})


app.listen(3000, () => {
    console.log("Server Listening on port 3000");
})