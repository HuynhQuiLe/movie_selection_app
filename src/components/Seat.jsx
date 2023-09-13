import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSeat } from "../redux/action/datVeActions";
import { message } from "antd";

class Seat extends Component {
  render() {
    return (
      <div>
        {this.props.seats.map((seat, index) => {
          return (
            <div
              className="row"
              key={index}
              style={{ height: "70px", alignItems: "center" }}
            >
              <p className="mb-0 firstChar" style={{ width: "40px" }}>
                {seat.hang}
              </p>
              <div
                className="row"
                style={{
                  width: "calc(100% - 40px)",
                  justifyContent: "space-evenly",
                }}
              >
                {seat.danhSachGhe.map((se, ind) => {
                  let className = "";
                  se.daDat
                    ? (className = " ghe gheDuocChon ")
                    : (className = "ghe ");
                  this.props.selected.forEach((element) => {
                    if (element.soGhe === se.soGhe) {
                      className += "gheDangChon";
                    }
                  });

                  return index !== 0 ? (
                    <p
                      className={className}
                      key={ind}
                      onClick={() => this.props.select(se)}
                    >
                      {se.soGhe}
                    </p>
                  ) : (
                    <p className="rowNumber" key={ind}>
                      {se.soGhe}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    seats: state.datVeReducers.seats,
    selected: state.datVeReducers.selected,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    select: (data) => {
      if (data.daDat) {
        message.error(`Seat ${data.soGhe} has already accupied!`);
        return;
      }
      const action = selectSeat(data);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seat);
