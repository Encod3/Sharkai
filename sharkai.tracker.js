/*
 * This Tracker is used to collect informations about all nodes and keep them updated.
 *
 * We use this to migrate the system and have updated routing tables.
 */

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

var nodes = [];

server.on('message', function(msg, rinfo) {
    console.log('Received %d bytes from %s:%d\n', msg.length, rinfo.address, rinfo.port);

    try {
        var json = JSON.parse(msg.toSource());

        if(json.hasOwnProperty('type')) {

        } else {
            console.log('Invalid JSON:', json);
        }
    } catch (e) {
        // Catch all broken JSON messages.
    }
    // No processing of packets right now. Its not needed.
});

// Start the server to be able to get messages from other nodes.
server.bind(5000);