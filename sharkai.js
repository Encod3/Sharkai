var dgram = require('dgram');

var server = dgram.createSocket('udp4');

var tracker_info = {ip: '127.0.0.1', port: 5000};

server.on('message', function(msg, rinfo) {
    console.log('Received %d bytes from %s:%d\n', msg.length, rinfo.address, rinfo.port);

    // No processing of packets right now. Its not needed.
});

server.on('listening', function() {
    var address = server.address();
    console.log("Sharkai listening on " + address.address + ":" + address.port);

    // Send join to the tracker service, to get a list of all nodes of interest.
    // Also to get our own external ip address in order to calculate our hashsum.

    var message = JSON.stringify({type: 'JOIN', time:Date.now()});
    server.send(message, 0, message.length, tracker_info.port, tracker_info.ip);

});

// Start the server to be able to get messages from other nodes.
server.bind(4000);