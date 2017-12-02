var setupScene = require('./Scene.js');
var debug = require('debug')('warp-framework:WaitForConsumerScene');

var WaitForConsumerScene = function(player) {
  function waitForConsumer() {
    return new Promise(function(resolve, reject) {
      debug('Waiting for a consumer for player '+player.getId());

      player.once('consumer_added', function() {
        debug('Player '+player.getId()+' received a consumer.');

        resolve();
      });
    });
  };

  return setupScene('wait_for_consumer', player).then(waitForConsumer);
};

module.exports = WaitForConsumerScene;
