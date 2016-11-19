var EventEmitter2 = require('eventemitter2').EventEmitter2;
var path = require('path');
var spawn = require('child_process').spawn;

var events = new EventEmitter2({wildcard: true});
var gkm = spawn('java', ['-jar', path.join(__dirname, 'lib/gkm-2.jar')]);

gkm.stdout.on('data', function(data) {
  events.emit('data', data);
});

module.exports = {
  events: events
};
