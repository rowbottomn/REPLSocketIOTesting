      $(function(){
        var socket = io();
        // Form submission handler.
        $('form').submit(function(){
          // Send message to server.
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });
        // Display messages emitted from server.
        socket.on('chat message', function(msg){
          $('#messages').append($('<li>').text(msg));
        });
      });