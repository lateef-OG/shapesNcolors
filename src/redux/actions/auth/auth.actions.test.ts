import * as actions from "./auth.actions";
import * as types from "../actionTypes";

describe("actions", () => {
  it("should create an action to login", () => {
    const token = "tokn";
    const expectedAction = {
      type: types.LOGIN,
      payload: token,
    };
    expect(actions.login(token)).toEqual(expectedAction);
  });
  it("should create an action to logout", () => {
    const expectedAction = {
      type: types.LOGOUT,
      payload: '',
    };
    expect(actions.logout()).toEqual(expectedAction);
  });
});
