var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a cat");
//         console.log(cat);
//     }
// });


//You can create  a new obj and save to the database
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the DB and console.log each one.

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no, there's an error!");
        console.log(err);
    } else {
        console.log("All the cats....");
        console.log(cats);
    }
});