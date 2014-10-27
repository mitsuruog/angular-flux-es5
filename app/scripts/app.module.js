(function(){
  'use strict';

  var module = angular.module('cart', []);

  module.value('catalogItems', [{
    title: 'AngularJSリファレンス',
    cost: 4104
  }, {
    title: 'Webアプリ構築のためのAngularJS',
    cost: 2070
  }, {
    title: 'AngularJSアプリケーション開発ガイド',
    cost: 2592
  }]);
  
})();