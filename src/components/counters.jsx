import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    console.log("heere", counterId);
    let newCounter = this.state.counters.filter((c) => {
      if (c.id == counterId) {
        if (c.value != 0) c.value -= 1;
        return c;
      } else return c;
    });
    console.log(newCounter);
    this.setState({ counters: newCounter });
  };

  handleIncrement = (counter) => {
    let newCounter = [...this.state.counters];
    let index = this.state.counters.indexOf(counter);
    newCounter[index] = { ...counter };
    newCounter[index].value++;
    this.setState({ counters: newCounter });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
