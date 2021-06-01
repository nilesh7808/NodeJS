const express = require('express')

const app = express()

const path = require('path')

const todos = ["Go to market", "Learn Web", "Learn NodeJS",
    "Buy groceries", "Buy Books", "Watching Movies", "Back to Home"
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("This IS THE ROOT ROUTE OF TEMPLATING")
})

app.get('/home', (req, res) => {
    res.render('home', { product })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10 + 1);
    res.render('random', { randomNum: num, todos: todos });
})

app.listen(3000, () => {
    console.log("Server started at port 3000");
})

const product = {
    img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Nilesh Laptop',
    price: 2000,
    description: 'This is very good laptop and it is available to buy now. It has amazing configuration with a 250gb SSD'
}