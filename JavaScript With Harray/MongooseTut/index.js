// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harraycard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("We are connect bor/sis..")
});

var kittySchema = new mongoose.Schema({
    name: String
});


// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
    const greeting =  "My name is " + this.name 
    console.log(greeting);
}

var Kitten = mongoose.model('HarrayKitty', kittySchema);
var harraykitty = new Kitten({name:"Harraykitty "});
var harraykitty1 = new Kitten({name:"Harraykitty1 "});

console.log(harraykitty.name); // 'Silence
harraykitty.speak();


  harraykitty.save(function (err, harraykitty) {
      if (err) return console.error(err);
      harraykitty.speak();
  });
  harraykitty1.save(function (err, harraykitty1) {
      if (err) return console.error(err);
      harraykitty1.speak();
  });


  Kitten.find({name: "harryakitty"},function (err, kittens) {
      if (err) return console.error(err);
      console.log(kittens);
  })