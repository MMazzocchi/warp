var EventEmitter = require('events');
var debug = require('debug')('warp-framework:Room');

var Room = function() {
  var that = new EventEmitter();

  debug('Created new Room.');

  // Public methods
  that.tick = function(delta, now) {
    that.emit('tick', delta, now);
  };

  return that;
};

module.exports = Room;
