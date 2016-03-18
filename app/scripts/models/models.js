var Backbone = require('backbone');

var Restaurant = Backbone.Model.extend({
 idAttribute: 'cid'
});

var RestaurantCollection = Backbone.Collection.extend({
  model: Restaurant,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/majesticthai',
  parse: function(data){
    return data;
  }
});

module.exports = {
  "Restaurant": Restaurant,
  "RestaurantCollection": RestaurantCollection
}
