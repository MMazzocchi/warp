var EventEmitter = require('events');

var Menu = function(options) {
  var that = new EventEmitter();

  // Fields
  var selection = 0;

  // Private methods
  function emit() {
    that.emit('selection', options[selection]);
  };

  // Public methods
  that.next = function(value) {
    if((value === undefined) || (value === 1)) {
      selection = (selection + 1) % options.length;
      emit();
    }
  };

  that.prev = function(value) {
    if((value === undefined) || (value === 1)) {
      selection = (selection + (options.length - 1)) % options.length;
      emit();
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
