import seats from "../../data/danhSachGhe.json";
import {
  DELETE_SELECTED_SEAT,
  SELECTED_SEAT,
} from "../constant/datVeConstants";

const initialState = {
  seats: seats,
  selected: [],
};

export const datVeReducers = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_SEAT:
      const selectedClone = [...state.selected];
      const index = selectedClone.findIndex(
        (seat) => seat.soGhe === action.data.soGhe
      );

      index === -1
        ? selectedClone.push(action.data)
        : selectedClone.splice(index, 1);
      return { ...state, selected: selectedClone };

    case DELETE_SELECTED_SEAT:
      const cloneSelected = [...state.selected];
      cloneSelected.splice(action.data, 1);
      return { ...state, selected: cloneSelected };
    default:
      return { ...state };
  }
};
