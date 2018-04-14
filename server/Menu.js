var Menu = function(options) {
  var that = {};

  // Fields
  var selection = 0;

  // Public methods
  that.next = function() {
    selection = (selection + 1) % options.length;
  };

  that.prev = function() {
    selection = (selection + (options.length - 1)) % options.length;
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
