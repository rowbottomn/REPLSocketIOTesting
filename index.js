let express = require('express');
var app = require('express')();
var http = require('http').Server(app);
let io = require('socket.io')(http);

//a user list
let users = [];


app.get('/', function(req, res){
  //https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http/29046869#29046869
  //res.sendFile(__dirname + '/script.js');
  //res.sendFile(__dirname + '/style.css');
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
    //remove their id from the users
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});