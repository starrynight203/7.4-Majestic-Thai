var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');
var menu = require('../menu-items.js'); // brought in raw data; json objects in an array
// console.log(menu);
var models = require('./../models/models');
var restaurantCollection = new models.RestaurantCollection(menu); // when you pass menu into a collection, it instantiates each object in the menu as a model - if the collection has a model set on it

var HomePage = require('./../components/index.jsx');
var MenuItemComponent = require('./../components/menu.jsx');

var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'menu':'menupage'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HomePage),
      document.getElementById('app')
    );
  },
  menupage: function(){
    ReactDOM.render(
      React.createElement(MenuItemComponent,{collection:restaurantCollection}),
      document.getElementById('app')
    )
  }
});

module.exports = new Router();
restaurantCollection.fetch();
