var Backbone = require('backbone');

var Restaurant = Backbone.Model.extend({
 idAttribute: 'cid'
});

var RestaurantCollection = Backbone.Collection.extend({
  model: Restaurant,
  // url: 'http://tiny-lasagna-server.herokuapp.com/collections/majesticthai',
  // parse: function(data){
  //   return data;
  // }
});

var Cart = Backbone.Model.extend({});

var CartCollection = Backbone.Collection.extend({
  model: Cart
});

module.exports = {
  "Restaurant": Restaurant,
  "RestaurantCollection": RestaurantCollection,
  'Cart': Cart,
  'CartCollection': CartCollection
}
