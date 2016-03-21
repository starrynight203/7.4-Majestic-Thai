var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MenuItemComponent = React.createClass({

  render: function(){
    var menuItems = this.props.collection.map(function(model){
      return(
        <div key={model.cid}>
          <div className="menu-list">
          <span className="individual-item">{model.get('item')}</span>
          <span>{model.get('description')}</span>
          <a><span>{model.get('price')}</span></a>
          <span>{model.get('category')}</span>
          </div>
        </div>
      );
    })
    return ( <div> {menuItems} </div>);
  }
})

module.exports = MenuItemComponent;
