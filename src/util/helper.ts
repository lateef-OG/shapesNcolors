import { SHAPES_FILTER, COLORS_FILTER } from "../redux/actions/actionTypes";
import { colorFilterOptions, shapeFilterOptions } from "../constants/filters";
import { Action } from "../types";

export const handleFiltering = (
  filters: string[],
  action: Action
): string[] => {
  let newFilters: string[];
  const filter = action.payload;
  const type = action.type;

  if (filters.includes(filter)) {
    let tempFilters = filters;
    const getIndex = tempFilters.indexOf(filter);
    tempFilters.splice(getIndex, 1);
    newFilters = tempFilters;
    if (tempFilters.length === 0 && type === SHAPES_FILTER)
      newFilters = [...shapeFilterOptions];
    if (tempFilters.length === 0 && type === COLORS_FILTER)
      newFilters = [...colorFilterOptions];
  } else {
    newFilters = [...filters, filter];
  }
  
  return newFilters;
};
