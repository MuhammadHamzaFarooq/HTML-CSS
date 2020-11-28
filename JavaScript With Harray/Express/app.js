const express = require("express");
const app = express();
const path = require("path");
const port = 80;


//EXPRESS SPACIFIC STUFF
app.use('/static', express.static('static')); // For serving static files


// PUG SPACIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug 
app.set('views', path.join(__dirname, 'views')); // set the views directory


// ENDPOINTS
app.get("/", (req, res) => {
    const con = "This is the best content of the internet so far  so use it wisely "
    const param = {
        "title": "Pug is the Best",
        "content": con
    };
    res.status(200).render('index.pug', param);
})





// START THE SERVER
app.listen(port, () => {
    console.log(`This application started successfully ${port}`);
});

















/*
// Our pug demo endpoint 
app.get("/demo", (req, res) => {
    res.status(200).render('demo', {
        title: 'Hey Hamza ',
        message: 'Hello there!'
    })
});
app.get("/", (req, res) => {
    res.send("This is homepage and my first express app ");
});
app.get("/about", (req, res) => {
    res.send("This is about page and my first express app ");
});
app.get("/contact", (req, res) => {
    res.send("This is contact page and  my first express app ");
});
app.get("/this", (req, res) => {
    res.status(404).send("This page is not found 404");
});
app.post("/contact", (req, res) => {
    res.send("This is contact page and  my first express app ");
});
*/