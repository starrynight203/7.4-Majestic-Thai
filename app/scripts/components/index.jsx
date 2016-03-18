var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');

var HomePage = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    Backbone.history.navigate('menu', {trigger: true});
  },
  render: function(){
    return(
      <div className="row">
        <HoursComponent/>
        <ContactComponent/>
        <MenuComponent onClick={this.handleClick}/>
      </div>
    );
  }
})

var HoursComponent = React.createClass({
  render: function(){
    return(
      <div className="col-md-5 hours" id="app">
        <a href="#">Hours:</a>
          <h2>Lunch:</h2>
            <p>Mon-Sat: 11:00am-2:00pm</p>
          <h2>Dinner:</h2>
            <p>Mon-Sat: 5:00pm-10:30pm</p>
      </div>
    );
  }
})

var ContactComponent = React.createClass({
  render: function(){
    return(
      <div className="col-md-2 contact">
        <h1>Contact</h1>
          <h3>864-555-5555</h3>
      </div>
    );
  }
})

var MenuComponent = React.createClass({
  render: function(){
    return(
      <div className="col-md-5 menu">
        <a onClick={this.props.onClick} href="#">Menu</a>
          <ul>
            <li>Appetizers</li>
            <li>Drinks</li>
            <li>Entrees</li>
          </ul>
      </div>
    )
  }
})



module.exports = HomePage;
