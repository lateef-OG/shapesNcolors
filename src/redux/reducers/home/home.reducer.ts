import data from "../../../data/data.json";
import { SHAPES_FILTER, COLORS_FILTER } from "../../actions/actionTypes";
import {
  colorFilterOptions,
  shapeFilterOptions,
} from "../../../constants/filters";
import { Action, HomeInitialState } from "../../../types";
import { handleFiltering } from "../../../util/helper";

export const initialState: HomeInitialState = {
  data,
  shapeFilters: [...shapeFilterOptions],
  colorFilters: [...colorFilterOptions],
};

const homeReducer = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case SHAPES_FILTER:
      const newShapeFilters = handleFiltering(state.shapeFilters, action);
      let shapeFilteredData = data.filter(
        (item) =>
          newShapeFilters.includes(item.name) &&
          state.colorFilters.includes(item.color)
      );
      return {
        ...state,
        data: shapeFilteredData,
        shapeFilters: newShapeFilters,
      };
    case COLORS_FILTER:
      const newColorFilters = handleFiltering(state.colorFilters, action);
      let colorFilteredData = data.filter(
        (item) =>
          state.shapeFilters.includes(item.name) &&
          newColorFilters.includes(item.color)
      );
      return {
        ...state,
        data: colorFilteredData,
        colorFilters: newColorFilters,
      };
    default:
      return state;
  }
};

export default homeReducer;
