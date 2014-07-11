/** @jsx React.DOM */

var React = require("react");

var Item = React.createClass({
  render: function() {
    return <h1>Hello from JSX!</h1>;
  }
});

React.renderComponent(<Item />, document.body);
