var express = require("express");

var app = express();
var PORT = 3000;

var path = require("path");

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/**json'}))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

app.use(bodyParser.text({ type: 'text/html' }))

var questions = {
    Question1: "name", 
    Question2: "favColor",
    Question3: "birthday",
    Question4: "career",
    Question5: "hobbies",
};

app.get("/", function (req, res){
    res.sendFile(path.join(_FriendFinder, "home.html"));
});

app.get("/questions", function(req, res){
    res.json(questions);
});


app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newfriend = req.body;
  
    console.log(newfriend);
  
    // We then add the json the user sent to the character array
    friend.push(newfriend);
  
    // We then display the JSON to the users
    res.json(newfriend);
  });












app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})
