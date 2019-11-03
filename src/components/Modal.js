import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <form className="modal" onSubmit={this.props.handleSubmit}>
        <h2>REACT SIGN-UP</h2>
        <input type="text" required id="name" placeholder="Name" />
        <input type="email" required id="email" placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <input type="submit" value="SIGN-UP" />
      </form>
    );
  }
}

export default Modal;
