var Menu = function(name, options, player) {
  var that = {};

  // Fields
  var selection = 0;
  var menu_title = name + "_menu";

  // Private methods
  function sendSelectionData() {
    var data = {
      'event_type': menu_title,
      'selection': menu.getSelectionIndex()
    };

    player.sendEventToConsumers(data);
  };

  // Public methods
  that.next = function(value) {
    if((value === undefined) || (value === 1)) {
      selection = (selection + 1) % options.length;
    }
  };

  that.prev = function(value) {
    if((value === undefined) || (value === 1)) {
      selection = (selection + (options.length - 1)) % options.length;
    }
  };

  that.getSelection = function() {
    return options[selection];
  };

  that.getSelectionIndex = function() {
    return selection;
  };

  that.getOptions = function() {
    return options;
  };

  return that;
};

module.exports = Menu;
