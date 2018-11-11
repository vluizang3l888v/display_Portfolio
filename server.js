var express = require("express");
var path = require("path");

var app = express();
// going to reference express app, I just told it to require. 

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})


// node modules must be on .gitignore. 



