var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var models = require('./models/models');
var restaurantCollection = new models.RestaurantCollection();

var restaurantComponent = require('./components/index.jsx');
var HoursComponent = restaurantComponent.HoursComponent;
var ContactComponent = restaurantComponent.ContactComponent;
var MenuComponent = restaurantComponent.MenuComponent;

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

restaurantCollection.fetch();
