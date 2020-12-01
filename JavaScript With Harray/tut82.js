//Searching for data in mongo db 
use harraycard

// This query will return all the objects will rating equal to 3.5
db.items.find({rating:3.5})
db.items.find({rating:{$gte:3.5}})
db.items.find({rating:{$gt:3.5}})
// And operator
db.items.find({rating:{$gt:3.5},price:{gt:4000}})
// OR Opeator
db.items.find({
    $or:[{rating:{$gt:3.5}},{price:{gt:4000}}]
})
