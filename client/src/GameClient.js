var SpaceDud = require('space-dud/client/dist/space-dud-client.js');
var setImmediate = require('timers').setImmediate;

var GameClient = function() {
  var that = {};

  // Public functions
  that.useDisplayConnection = function(player_id) {

    var client = new SpaceDud.DisplayConnection();
    setImmediate(function() {
      client.selectPlayer(player_id);
    });

    return new Promise(function(resolve, reject) {
      client.once('player_chosen', function(valid) {
        if(valid === true) {
          that.connectionReady(client);
          resolve();  

        } else {
          reject();
        }
      });
    });
  };

  that.useJointConnection = function() {
    throw new Error("Not implemented yet!");
  };

  that.connectionReady = function(connection) {
    
  };

  return that;
};

module.exports = GameClient;
