import { Action } from "../../../types";
import { LOGOUT, LOGIN } from "../../actions/actionTypes";

const token = localStorage.getItem("access_token") || "";

const initialState: { token: string } = {
  token,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("access_token", action.payload);
      return {
        ...state,
        token: action.payload
      }
    case LOGOUT:
      localStorage.removeItem("access_token");
      return{
        ...state,
        token: ''
      };
    default:
      return state;
  }
};

export default authReducer;
