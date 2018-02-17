var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(8080, function() {
    console.log("The Srver is listening on port 8080")
});

app.use(express.static('public'));

//function incrementSeconds() {

var io = socket(server);

io.on('connection', function(socket) {
    socket.on("chat", function(data) {
        io.sockets.emit("chat", data);
    });
});
//}
//setTimeout(incrementSeconds, 5000);