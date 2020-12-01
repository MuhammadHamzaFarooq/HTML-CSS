const {
    urlencoded
} = require("express");
const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

//EXPRESS SPACIFIC STUFF
app.use('/static', express.static('static')); // For serving static files


// PUG SPACIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug 
app.set('views', path.join(__dirname, 'views')); // set the views directory
app.use(urlencoded());

// ENDPOINTS
app.get("/", (req, res) => {
    const param = {};
    res.status(200).render('home.pug', param);
});
app.get("/contact", (req, res) => {
    const param = {};
    res.status(200).render('contact.pug', param);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`This application started successfully ${port}`);
});