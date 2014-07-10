/** @jsx React.DOM */

var React = require("react");
var products = require("./products.json");

var Product = React.createClass({
  render: function() {
    return <div>
             <strong>{ this.props.name }</strong>: { "$" + this.props.price }
           </div>;
  }
}); 

var ProductList = React.createClass({
  getInitialState: function() {
    return {
      products: products
    }
  },
  render: function() {
    var products = this.state.products.map(function(p) {
      return <Product name={p.productName} price={p.price} />;
    });

    return (
      <div>
        <h1>Products</h1>
        { products }
      </div>
    );
  }
});

var Cart = React.createClass({
  getInitialState: function() {
    return {
      cartItems: []
    }
  },
  render: function() {
    var cartItems = this.state.cartItems.map(function(cartItem) {
      return <CartItem item={cartItem.name} quantity={cartItem.quantity} />
    });
    return (
      <div>
        <h3>Shopping Cart<h3>}
        { cartItems }
      </div>
    )
  }
});

React.renderComponent(<ProductList />, document.body);