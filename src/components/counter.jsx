import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
  }

  // it gets called when 1 compnent gets updated. you can compare the data here and decide to make to api or not
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, "prevProps");
    console.log(prevState, "prevState");
  }

  // it gets called when 1 compnent gets removed. you can compare the data here and decide to make to api or not

  componentWillUnmount(prevProps, prevState) {
    console.log("compoennt deleted");
  }
  render() {
    return (
      <div>
        <h5>counter # {this.props.counter.id}</h5>
        <span style={this.getBatchColor()}>{this.formatCount()}</span>
        <button
          className="btn btn-primary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Incerement
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
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
