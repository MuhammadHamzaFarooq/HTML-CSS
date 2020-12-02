const {
    urlencoded
} = require("express");
const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {
    useNewUrlParser: true
});
const port = 8000;

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
   
// }); 

// Define mongoose schema

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});

const Contact = mongoose.model('Contact', contactSchema);

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
    var myData = new Contact(req.body);
    myData.save().then(()=>{
           res.send("This item has been to the database")
    }).catch(()=>{
        res.status(404).send("item was not save to database ");
    })
    // res.status(200).render('contact.pug');
});
app.post("/contact", (req, res) => {
    const param = {};
    res.status(200).render('contact.pug', param);
});

// START THE SERVER
app.listen(port, () => {
    console.log(`This application started successfully ${port}`);
});