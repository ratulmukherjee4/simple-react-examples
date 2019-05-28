import React, { Component } from "react";
import MyComponent from "./MyComponent";
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  updateData = () => {
    this.setState({ name: "Ratul" });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
        />
        <MyComponent data={this.state.name} updateData={this.updateData} />
      </div>
    );
  }
}
