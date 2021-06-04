const express = require('express');
const app = express();
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));


const comments = [{
    id: 0,
    username: "Nilesh",
    body: "This is a comment"
}, {
    id: 1,
    username: "Cat",
    body: "Meow Meoow"
}, {
    id: 2,
    username: "Dog",
    body: "Woof Woof Woof"
}, {
    id: 3,
    username: "Hector",
    body: "He is a good Player"
}]

// List all the cooments
app.get("/comments", (req, res) => {
    res.render('comments/index', { comments })
})

// getting a form for adding new comments

app.get("/comments/new", (req, res) => {
    res.render('comments/new')
})

// creates a new comment
app.post('/comments', (req, res) => {

    const { username, body } = req.body;
    const id = comments.length;
    comments.push({ username, body, id })

    res.redirect('/comments')
})

// Show particular comments

app.get('/comments/:id', (req, res) => {

    const { id } = req.params;

    const foundComment = comments.find(c => c.id === parseInt(id));


    res.render('comments/show', { comment: foundComment })
})


// getting a form for editing comment

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === parseInt(id))
    res.render('comments/edit', { comment: foundComment });

})

// Update the comments

app.patch('/comments/:id', (req, res) => {

    const { id } = req.params;
    const foundComment = comments.find(c => c.id === parseInt(id))
    const updatedCommentText = req.body.body;
    foundComment.body = updatedCommentText;
    res.redirect("/comments");
})

app.listen(3000, () => {
    console.log("Server started at Port:3000");
})