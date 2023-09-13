import React, { Component } from "react";

export default class Responsive extends Component {
  render() {
    return (
      <h1 className="responsive">
        RESIZE YOUR DEVICE IN ORDER TO SEE THE WEBSITE'S LAYOUT
        <p className="mt-5 text-muted">Must be bigger than 1300px</p>
      </h1>
    );
  }
}
