show dbs
use harrayCard
show Collections
db.items.find({price:22000})


// Delelting items form the mongo Database
db.items.deleteOne({price:22000})

// deleteOne will delete the matching document entry
// and will delete first entry  in case of multi document matchdb.
items.deleteMany({price:22000})