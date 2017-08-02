var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(process.env.PORT||8085);
function handler (req, res) {
    res.end("Welcome to C# Corner Socket ")
}

io.on('connection', function (socket) {
  socket.on('ForumPost', function (data) {
    io.sockets.emit('ForumDataSend',{Message:JSON.stringify(data)});
  });
});