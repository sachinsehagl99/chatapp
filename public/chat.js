var socket = io.connect("http://localhost:8080");

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedbacke = document.getElementById("feedback");

function myFucntion() {
    socket.emit("chat", { message: message.value, handle: handle.value });
}

btn.addEventListener("click", function() {
    setTimeout(function() {
        socket.emit("chat", { message: this.message.value, handle: this.handle.value });
    }, 2000);
});


socket.on("chat", function(data) {
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

//setTimeout(incrementSeconds, 3000);