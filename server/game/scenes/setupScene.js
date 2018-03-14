var debug = require('debug')('warp-framework:Scene');

var setupScene = async function(name, player) {
  debug('Setting up a '+name+' Scene.');

  function createScenePacket() { 
    var data = {
      'event_type': 'scene',
      'scene': name
    };

    return data;
  };

  function broadcastScenePacket() {
    var data = createScenePacket();
    player.sendEventToConsumers(data);
  };

  function sendScenePacket(consumer_id) {
    setImmediate(function() {
      var data = createScenePacket();
      player.sendEventToConsumer(data, consumer_id);
    });
  };

  setImmediate(broadcastScenePacket);

  return Promise.resolve();
};

module.exports = setupScene;
