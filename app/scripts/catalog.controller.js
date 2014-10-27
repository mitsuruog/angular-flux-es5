(function(){
  'use strict';
  
  function CatalogCtrl(catalogItems, cartActions){
      
    this.cartActions = cartActions;
    this.items = catalogItems;
    
    this.addItem = function(item) {
      this.cartActions.addItem(item);
    };
    
  }
  
  angular.module('cart').controller('catalogCtrl', CatalogCtrl);

})();