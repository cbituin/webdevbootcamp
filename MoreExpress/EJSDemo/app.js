var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
} );

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thing});
    
});

app.get("/posts", function(req, res) {
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My favorite stuff", author: "Bob"},
            {title: "10 steps to things", author: "Sarah"},
        ];
        
        res.render("posts.ejs", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
})