import React, { Component } from "react";
import Seat from "./Seat";

export default class Selection extends Component {
  render() {
    return (
      <section className="col-8">
        <h1 className="text-center m-0" style={{ height: "60px" }}>
          MOVIE SEAT SELECTION
        </h1>
        <div className="glass">
          <div className="legend">
            <div className="legend__selected d-flex align-items-center mr-5">
              <div className="square mr-2 selected"></div>
              <p className="mb-0">Selected Seat</p>
            </div>
            <div className="legend__reserved d-flex align-items-center mr-5">
              <div className="square mr-2 reserved"></div>
              <p className="mb-0">Reserved Seat</p>
            </div>
            <div className="legend__empty d-flex align-items-center mr-5">
              <div className="square mr-2"></div>
              <p className="mb-0">Empty Seat</p>
            </div>
          </div>
          <div className="screen mx-auto my-5">
            <p>SCREEN THIS WAY</p>
          </div>
          <div className="seat">
            <Seat />
          </div>
        </div>
      </section>
    );
  }
}
