import * as actions from "./home.actions";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to filter by color", () => {
    const filter = "red";
    const expectedAction = {
      type: types.COLORS_FILTER,
      payload: filter,
    };
    expect(actions.filterColor(filter)).toEqual(expectedAction);
  });
  it("should create an action to filter by shape", () => {
    const filter = "triangle";
    const expectedAction = {
      type: types.SHAPES_FILTER,
      payload: filter,
    };
    expect(actions.filterShape(filter)).toEqual(expectedAction);
  });
});
