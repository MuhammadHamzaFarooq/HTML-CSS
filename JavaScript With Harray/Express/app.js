const express = require("express");
const app = express();
const path = require("path");

const port = 80;

// Express spacific stuff
app.use("/static", express.static("static")); // For serving staitic files

// Express spacific pug
app.set('view engine', 'pug'); // set the template engin as pug
app.set('view ', path.join(__dirname, 'view ')); // set the views directory

// ENDPOINTS
app.get("/", (req, res) => {
    const con = "This is the best content on the internet so far to use it wisely";
    const params = {
        "title": "Pug is the best",
        "content"


        : con
    }
    res.status(200).render("index.pug", params);
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


// Start the server
app.listen(port, () => {
    console.log(`This application started successfuly on port  ${port}`);
});