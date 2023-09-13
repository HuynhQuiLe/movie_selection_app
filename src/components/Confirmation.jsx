import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteSelectedSeat } from "../redux/action/datVeActions";

class Confirmation extends Component {
  renderSelectedSeats = () => {
    const selectedSeats = this.props.selected;
    if (selectedSeats.length === 0) {
      return (
        <tr>
          <td colSpan={3}>No data</td>
        </tr>
      );
    } else {
      return selectedSeats.map((seat, index) => {
        return (
          <tr key={index}>
            <td>{seat.soGhe}</td>
            <td>{seat.gia.toLocaleString()} VND</td>
            <td
              className="text-danger"
              style={{ cursor: "pointer" }}
              onClick={() => this.props.detele(index)}
            >
              X
            </td>
          </tr>
        );
      });
    }
  };
  renderTotal = () => {
    const selectedSeats = this.props.selected;

    let total = 0;
    if (selectedSeats.length === 0) {
      total = 0;
    } else {
      selectedSeats.map((seat) => {
        total += seat.gia;
      });
    }

    return total.toLocaleString();
  };
  render() {
    return (
      <section className="col-4">
        <h1 className="text-center m-0" style={{ height: "60px" }}>
          CONFIRMATION
        </h1>
        <div className="glass">
          <table>
            <thead>
              <tr>
                <th colSpan={1} style={{ width: "40%" }}>
                  Seat
                </th>
                <th colSpan={1} style={{ width: "40%" }}>
                  Price
                </th>
                <th colSpan={1} style={{ width: "20%" }}>
                  Cancel
                </th>
              </tr>
            </thead>
            <tbody>{this.renderSelectedSeats()}</tbody>
            <tfoot>
              <tr>
                <td colSpan={1}>Total</td>
                <td colSpan={2}>{this.renderTotal()} VND</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    selected: state.datVeReducers.selected,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    detele: (index) => {
      dispatch(deleteSelectedSeat(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
