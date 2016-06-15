'use strict';

var Dog = function(name) {

  var _name = name;

  this.whoIsAGoodBoy = function() {
    return _name + ' is a good boy!';
  };

  this.wiggle = function() {
    return _name + ' is wiggling.';
  };

  this.getName = function() {
    return _name;
  };

  this.setName = function(newName) {
    _name = newName;
  }

}

module.exports = Dog;