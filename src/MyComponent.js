import React, { Component } from "react";
export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateData}>Click Me To Update!</button>
        <h1>{this.props.data}</h1>
      </div>
    );
  }
}
