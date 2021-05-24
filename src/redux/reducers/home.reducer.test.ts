import reducer, { initialState } from "./home.reducer";
import * as types from "../actions/actionTypes";

describe("home reducer", () => {
  it("should handle COLORS_FILTER", () => {
    const color = "blue";
    expect(
      reducer(initialState, {
        type: types.COLORS_FILTER,
        payload: color,
      }).data
    ).toEqual(
      expect.arrayContaining([
        expect.not.objectContaining({
          color,
        }),
      ])
    );
  });

  it("should handle SHAPES_FILTER", () => {
    const shape = "round";
    expect(
      reducer(initialState, {
        type: types.SHAPES_FILTER,
        payload: shape,
      }).data
    ).toEqual(
      expect.arrayContaining([
        expect.not.objectContaining({
          name: shape,
        }),
      ])
    );
  });
});
