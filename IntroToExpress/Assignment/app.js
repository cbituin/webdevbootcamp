var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof woof!",
        cat: "I hate you human",
        goldfish: "...", 
        zeek: "i farted"
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:number", function(req, res) {
    var repeatedWord = req.params.word;
    var repeatedNum = Number(req.params.number);
    var result = "";

    for(var i = 0; i < repeatedNum; i++){
        result += repeatedWord + " ";
        }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
