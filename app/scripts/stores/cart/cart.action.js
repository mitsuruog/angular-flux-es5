(function(){
  'use strict';
  
  function CartActions(dispatcher){
  
    return {
      addItem: function(item) {
        return dispatcher.emit({
          actionType: 'add',
          item: item
        });
      },
      removeItem: function(item) {
        return dispatcher.emit({
          actionType: 'remove',
          item: item
        });
      }
    };

  }

  angular.module('cart').factory('cartActions', CartActions);
  
})();