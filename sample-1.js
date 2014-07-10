var React = require("react");

var Item = React.createClass({
    render: function() {
        return React.DOM.li(null, this.props.itemName);
    } 
});

var ItemList = React.createClass({
    render: function() {
        var items = this.props.items.map(function(item) {
          return Item({ itemName: item });
        });
        return React.DOM.ul({className: "items"}, items);
    }
});

var items = ["Item 1", "Item 2", "Item 3"];

React.renderComponent(ItemList({ items: items}), document.body);