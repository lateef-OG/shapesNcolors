import data from "../../data/data.json";
import { SHAPES_FILTER, COLORS_FILTER } from "../actions/actionTypes";
import {
  colorFilterOptions,
  shapeFilterOptions,
} from "../../constants/filters";
import { Action, InitialState } from "../../types";

export const initialState: InitialState = {
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

const handleFiltering = (filters: string[], action: Action): string[] => {
  let newFilters: string[];
  const filter = action.payload;
  const type = action.type;
  if (filters.includes(filter)) {
    let tempFilters = filters;
    const getIndex = tempFilters.indexOf(filter);
    tempFilters.splice(getIndex, 1);
    newFilters = tempFilters;
    if (tempFilters.length === 0 && type === SHAPES_FILTER) newFilters = [...shapeFilterOptions];
    if (tempFilters.length === 0 && type === COLORS_FILTER) newFilters = [...colorFilterOptions];
  } else {
    newFilters = [...filters, filter];
  }
  return newFilters;
};

export default homeReducer;
