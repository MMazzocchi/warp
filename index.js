var Warp = {};

Warp.Game = require('./server/game/Game.js');
Warp.Room = require('./server/game/rooms/Room.js');
Warp.Scene = require('./server/game/scenes/Scene.js');
Warp.WaitForConsumerScene = require('./server/game/scenes/WaitForConsumerScene.js');
Warp.ControllerSetupScene = require('./server/game/scenes/controller/ControllerSetupScene.js');

module.exports = Warp;
