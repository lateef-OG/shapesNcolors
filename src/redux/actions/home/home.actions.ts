import { SHAPES_FILTER, COLORS_FILTER } from "../actionTypes";

export const filterShape = (shapeFilter: string) => {
  return {
    type: SHAPES_FILTER,
    payload: shapeFilter,
  };
};

export const filterColor = (colorFilter: string) => {
  return {
    type: COLORS_FILTER,
    payload: colorFilter,
  };
};
