var React = require("react");

var Item = React.createClass({
    render: function() {
        return React.DOM.h1(null, "Hello!");
    }
});

React.render(React.createElement(Item), document.body);
