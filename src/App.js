import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mounted: false,
      name: "",
      email: ""
    };
  }

  componentDidMount = () => {
    this.setState({ mounted: true });
  };

  handleSubmit = e => {
    var email = document.querySelector("#email").value;
    var name = document.querySelector("#name").value;

    this.setState({ email: email });
    this.setState({ name: name });

    console.log("form submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    this.setState({ mounted: false });
    e.preventDefault();
  };

  render() {
    var child;

    if (this.state.mounted) {
      child = <Modal handleSubmit={this.handleSubmit} />;
    }

    return (
      <div className="App">
        <h1>React Sign-up Form</h1>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
