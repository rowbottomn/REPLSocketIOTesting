let express = require('express');
var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('A user connected.');
  
  // Receive messages.
  socket.on('chat message', function(msg){
    // Send message to all users.
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('A user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});