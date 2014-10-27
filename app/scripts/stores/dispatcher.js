(function(){
  'use strict';
  
  function Dispatcher(){
    this.listeners = [];
  }
  
  Dispatcher.prototype.emit = function(event) {
    this.listeners.forEach(function(listener){
      listener(event);
    });
  };
  
  Dispatcher.prototype.addListener = function(event) {
    this.listeners.push(event);
    return this.listeners.length - 1;
  };

  angular.module('cart').service('dispatcher', Dispatcher);
  
})();