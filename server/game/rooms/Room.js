var EventEmitter = require('events');
var debug = require('debug')('warp-framework:Room');

var Room = function() {
  var that = new EventEmitter();

  debug('Created new Room.');

  // Fields
  var player_list = [];
  var player_hash = {};

  // Public methods
  that.addPlayer = function(player) {
    var id = player.getId();
    debug('Adding player '+id);

    player_list.push(player);
    player_hash[id] = player;

    player.once('disconnect', removePlayer);
    that.emit('player_added', player);
  };

  that.removePlayer = function(player) {
    var id = player.getId();
    debug('Removing player '+id+'.');

    if(player_hash[id] !== undefined) {
      var index = player_list.indexOf(player);
      player_list.splice(index, 1);
      player_hash[id] = undefined;

    } else {
      debug('Player '+id+' did not exist!');
    }

    that.emit('player_removed', player);
  };

  that.getPlayer = function(id) {
    return player_hash[id];
  };

  that.getPlayers = function() {
    return player_list;
  };

  that.broadcast = function(data) {
    for(var i = 0; i < player_list.length; i++) {
      player_list[i].sendEventToConsumers(data);
    }
  };

  that.sendToPlayer = function(id, data) {
    if(player_hash[id] !== undefined) {
      player_hash[id].sendEventToConsumers(data);
    }
  };

  return that;
};

module.exports = Room;
