var Warp = {};

Warp.Game = require('./server/game/Game.js');
Warp.Room = require('./server/game/rooms/Room.js');
Warp.setupScene = require('./server/game/scenes/setupScene.js');
Warp.WaitForConsumerScene = require('./server/game/scenes/WaitForConsumerScene.js');
Warp.ControllerSetupScene = require('./server/game/scenes/controller/ControllerSetupScene.js');

module.exports = Warp;
