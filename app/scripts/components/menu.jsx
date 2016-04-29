var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var model = require('./../models/models');

// var MainPageComponent = React.createClass({
//   mixins: [Backbone.React.Component.mixin],
//
// });

var MenuItemComponent = React.createClass({
  handleClick: function(model, e){
    console.log(model);
  },
  cartClick: function(e){
    e.preventDefault();
    Backbone.history.navigate('cart', {trigger: true});
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
          <button className="btn btn-default add-button" type="submit">Add</button>
          </div>

          <div className="goestocart">
            <button className="btn btn-default" type="submit" onClick={self.cartClick}>Go to Cart</button>
          </div>
        </div>

      );
    })
    return ( <div> {menuItems} </div>);
  }
})

// var AppetizersComponent = React.createClass({
//   render: function(){
//     var self = this;
//     var menuItems = this.props.collection.map(function(model){
//     var model = model;
//     return(
//       <div key={model.cid}>
//         <div className="appetizers">
//           <span className="individual-item">{model.get('item')}</span>
//           <span>{model.get('description')}</span>
//           <a onClick={self.handleClick.bind(self, model)}><span>{model.get('price')}</span></a>
//         </div>
//       </div>
//     );
//   })
//      return ( <div> {menuItems} </div>);
//   }
// })

var CartComponent = React.createClass({
  render: function(){
    return(
      <div className="col-md-5 cart">
        <h4>Order</h4>
        <table className="table">
          <thead>
            <tr>
              <td>Item</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
            <tbody>

            </tbody>
        </table>
      </div>
    );
  }
})

module.exports = {
  "MenuItemComponent": MenuItemComponent,
  // "AppetizersComponent": AppetizersComponent,
  "CartComponent": CartComponent
}
