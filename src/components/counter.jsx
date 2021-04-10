import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h5>counter # {this.props.counter.id}</h5>
        <span style={this.getBatchColor()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)}>
          Incerement
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
  getBatchColor() {
    let style = {
      fontSize: 30,
      fontWeight: "bold",
      backgroundColor: "yellow",
    };
    style.backgroundColor = this.props.counter.value == 0 ? "yellow" : "blue";
    return style;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
