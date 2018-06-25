//Quick demonstration form for Associations/Referenced Data

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");

var User = require("./models/user");


// // User.create({
// //     email: "bob@gmail.com",
// //     name: "Bob Belcher"
// // });

Post.create({
    title: "Yes, we did that (continued!!) YES AGAIN, HERE WE GO",
    content: "This is 65468489465489464684 we did. You're 3554468548949845621"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function (err, foundUser){
        if(err){
            console.log(err);
        } else 
        foundUser.posts.push(post);
        foundUser.save(function(err, data){
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        });
    });
});
    


// //find user
// //find all posts for that user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }    else {
//         console.log(user);
//     }
// });
