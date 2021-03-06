import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //1st constructor will be set you cal set your state here
  constructor(props) {
    console.log("constructor called");
    super(props);
  }
  handleIncrement = (counter) => {
    let newCounter = [...this.state.counters];
    let index = this.state.counters.indexOf(counter);
    newCounter[index] = { ...counter };
    newCounter[index].value++;
    this.setState({ counters: newCounter });
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

  //3rd it gets called when all element gets called. you can make api calls here bring data and pass to the state
  componentDidMount() {
    console.log("component mounted");
  }
  render() {
    //2nd react element will be rendered

    console.log("renered");
    return (
      <React.Fragment>
        <Navbar
          totalCounter={
            this.state.counters.filter((c) => {
              return c.value > 0;
            }).length
          }
        />
        <main className="container">
          <h1>Hi 1st react page</h1>
          <Person name="Silan" age="27" />
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
