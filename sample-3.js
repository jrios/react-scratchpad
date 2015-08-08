/** @jsx React.DOM */

var React = require("react");

var Detonator = React.createClass({
  countDown: function() {
    var timeRemaining = this.state.timeRemaining - 1;
    if(timeRemaining == 0) {
      this.setState({ timeRemaining: "BOOM!" });
      clearInterval(this.interval);
    } else {
      this.setState({ timeRemaining: timeRemaining });
    }
  },
  getInitialState: function() {
    return {
      timeRemaining: 10
    }
  },
  componentDidMount: function() {
    this.interval = setInterval(this.countDown, 1000);
  },
  render: function() {
    return <div>{ this.state.timeRemaining }</div>;
  }
});



React.render(<Detonator />, document.body);