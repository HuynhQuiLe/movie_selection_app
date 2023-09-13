import {
  DELETE_SELECTED_SEAT,
  SELECTED_SEAT,
} from "../constant/datVeConstants";

export const selectSeat = (data) => ({
  type: SELECTED_SEAT,
  data,
});

export const deleteSelectedSeat = (index) => ({
  type: DELETE_SELECTED_SEAT,
  data: index,
});
