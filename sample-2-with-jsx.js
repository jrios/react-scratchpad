/** @jsx React.DOM */

var React = require("react");

var Item = React.createClass({
  render: function() {
    return <li>{ this.props.itemName }</li>;
  }
});

var ItemList = React.createClass({
  render: function() {
    var items = this.props.items.map(function(item) {
      return <Item itemName={item} />;
    });

    return <ul>{ items }</ul>;
  }
});

var items = ["Item 1", "Item 2", "Item 3"];

React.renderComponent(<ItemList items={items} />, document.body);