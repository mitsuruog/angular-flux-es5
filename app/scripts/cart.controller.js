(function(){
  'use strict';
  
  function CartCtrl(cartStore, cartActions){
    
    this.cartStore = cartStore;
    this.cartActions = cartActions;
    
    cartStore.addListener((function(_this){
      return function(){
        return _this.resetItems();
      };
    })(this));
    
    this.resetItems = function(){
      this.items = this.cartStore.items();
    };
    
    this.removeItem = function(item) {
      this.cartActions.removeItem(item);
    };
    
    this.resetItems();

  }
  
  angular.module('cart').controller('cartCtrl', CartCtrl);

})();