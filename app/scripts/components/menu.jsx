var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var MenuItemComponent = React.createClass({
  handleClick: function(model, e){
    console.log(model);
  },
  render: function(){
    console.log(this.props);
    var self = this;
    var menuItems = this.props.collection.map(function(model){
    var model = model;
      return(
        <div key={model.cid}>
          <div className="menu-list">
          <span className="individual-item">{model.get('item')}</span>
          <span>{model.get('description')}</span>
          <a onClick={self.handleClick.bind(self, model)}><span>{model.get('price')}</span></a>
          <span>{model.get('category')}</span>
          <button className="btn btn-default" type="submit">Add</button>
          </div>
        </div>
      );
    })
    return ( <div> {menuItems} </div>);
  }
})

var CartComponent = React.createClass({
  render: function(){
    return(

    );
  }
})



module.exports = MenuItemComponent;
