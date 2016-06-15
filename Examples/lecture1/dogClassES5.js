'use strict';

//Remove the comment from the line below to import winston to this file
//var log = require('./winstonConfig.js');

var logMsg = function (msg) {
  console.log(msg);

  //Remove the comment from the line below to use the imported function
  //log.info(msg);
};

var Dog = function (name) {
  var _name = name;

  this.whoIsAGoodBoy = function () {
    logMsg(_name + ' is a good boy!');
  };

  this.wiggle = function () {
    logMsg(_name + ' is wiggling.');
  };
}

var brian = new Dog('Brian');

brian.whoIsAGoodBoy();
brian.wiggle();
