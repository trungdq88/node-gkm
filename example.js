var fs = require('fs');
var gkm = require('./node-gkm.js');

// var LOG_DIR = '~/.dqkey';

// Listen to all events
gkm.events.on('data', function (data) {
  console.log(data.toString());
  // fs.appendFile(LOG_DIR + '/keylog', data);
});
// fs.writeFile('log.txt', 'Hello Node',  {'flag':'a'},  function(err) {
//     if (err) {
//         return console.error(err);
//     }
// });
