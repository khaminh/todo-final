import React, { Component } from "react";

export default class InputGroup extends Component {
  state = {
    value: ""
  };
  changeValueHanler = event => {
    this.setState({ value: event.target.value });
  };
  submitHandler = event => {
    event.preventDefault();
    if (this.state.value != " " && this.state.value != "") {
      this.props.add(this.state.value);
    } else {
      alert("Nho nhap ban oi ~");
    }
    this.state.value = "";
  };
  render() {
    return (
      <form className="mb-4" onSubmit={this.submitHandler}>
        <input
          onChange={this.changeValueHanler}
          value={this.state.value}
          type="text"
          placeholder="Input your here..."
          style={{
            width: "90%",
            padding: "10px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            outline: "none",
            border: "1px solid #3498db"
          }}
        />
        <button
          type="submit"
          style={{
            background: "#be2edd",
            padding: "10px 0",
            cursor: "pointer",
            width: "10%",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            borderWidth: "1px 1px 1px 0",
            outline: "none",
            color: "yellow",
            border: "1px solid #be2edd",
            fontWeight: "600"
          }}
        >
          ADD TASK
        </button>
      </form>
    );
  }
}