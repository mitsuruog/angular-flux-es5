(function(){
  'use strict';
  
  function CartStore(dispatcher){
      
    function Store(){
      this.items = [];
      dispatcher.constructor.call(this);
    }  
    
    Store.prototype = Object.create(dispatcher.constructor.prototype);
    Store.prototype.constructor = Store;
    
    Store.prototype.addItem = function(item){
      console.log('add to cart -> ' + item.title);
      
      var storedItems = this.items.filter(function(storedItem){
        return storedItem.catalogItem === item;
      });
      
      if(storedItems.length === 0){
        this.items.push({
          qty: 0,
          catalogItem: item
        });
      } else {
        storedItems[0].qty += 1;
      }
      
    };
    
    Store.prototype.removeItem = function(item) {
      console.log('remove from cart -> ' + item.catalogItem.title);
      
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
      
    };

    Store.prototype.emitChange = function() {
      console.log('emit change');
      this.emit();
    };
    
    var store = new Store();
    
    //View側からのActionに対する反応
    dispatcher.addListener(function(action){
      switch (action.actionType) {
        case 'add':
          store.addItem(action.item);
          break;
        case 'remove':
          store.removeItem(action.item);
          break;
        default:
          console.log('invalid actionType -> ' + action.actionType);
      }
      store.emitChange();
    });
    
    // View側への公開I/F
    return {
      addListener: function(listener){
        store.addListener(listener);
      },
      items: function(){
        return store.items;
      }
    };

  }

  angular.module('cart').factory('cartStore', CartStore);
  
})();