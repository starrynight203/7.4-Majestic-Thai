var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var HoursComponent = React.createClass({
  render: function(){
    return(
      <div>
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
      <div>
        <h1>Contact</h1>
          <h3>864-555-5555</h3>
      </div>
    );
  }
})

var MenuComponent = React.createClass({
  render: function(){
    return(
      <div>
        <a href="#">Menu</a>
          <ul>
            <li>Appetizers</li>
            <li>Salads</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Drinks</li>
          </ul>
      </div>
    )
  }
})



module.exports = {
  'HoursComponent': HoursComponent,
  'ContactComponent': ContactComponent,
  'MenuComponent': MenuComponent 
}
