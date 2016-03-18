var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./../models/models');
var restaurantCollection = new models.RestaurantCollection();

var restaurantComponent = require('./../components/index.jsx');
var HoursComponent = restaurantComponent.HoursComponent;
var ContactComponent = restaurantComponent.ContactComponent;
var MenuComponent = restaurantComponent.MenuComponent;


var Router = Backbone.Router.extend({
  routes:{
    '':'index',
    'menu':'menupage'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(HoursComponent),
      document.getElementById('app')
    );

    ReactDOM.render(
      React.createElement(ContactComponent),
      document.getElementById('contact')
    );

    ReactDOM.render(
      React.createElement(MenuComponent),
      document.getElementById('menu')
    );
  },
  menupage: function(){
    ReactDOM.render(

    )
  }
});

module.exports = new Router();
restaurantCollection.fetch();
