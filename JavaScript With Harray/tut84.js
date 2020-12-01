show dbs
use harrayCard
show Collections
db.items.find({
    price: 22000
})

// update   one
db.items.updateOne({
    name: "Moto 30s"
}, {
    $set: {
        price: 2
    }
})
// update   Many

 db.items.updateMany({
     name: "Moto 30s"
 }, {
     $set: {
         price: 3,
         rating: 1
     }
 })