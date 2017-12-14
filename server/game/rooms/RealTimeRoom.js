var EventEmitter = require('events');
var Room = require('./Room.js');

function static_scope() {
  const DEFAULT_UPDATE_INTERVAL = 33; 

  var clock = new EventEmitter();
  function clockTick() {
    clock.emit('tick', new Date());
  };

  var clock_interval = setInterval(clockTick, DEFAULT_UPDATE_INTERVAL);

  var RealTimeRoom = function() {
    var that = Room();

    clock.on('tick', function(date) {
      that.emit('tick', date);
    });

    return that;
  };

  return RealTimeRoom;
};

module.exports = static_scope();
