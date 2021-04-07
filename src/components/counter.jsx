import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor() {
    super();
    this.handleIncrement.bind(this);
  }
  renderTags() {
    if (this.state.tags.length == 0) return <p>'there are no tags'</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <span style={this.getBatchColor()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement}>Incerement</button>
        {this.renderTags()}
      </div>
    );
  }
  getBatchColor() {
    let style = {
      fontSize: 30,
      fontWeight: "bold",
      backgroundColor: "yellow",
    };
    style.backgroundColor = this.state.count == 0 ? "yellow" : "blue";
    return style;
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
