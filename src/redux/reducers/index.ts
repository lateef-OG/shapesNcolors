import { combineReducers } from "redux";
import homeReducer from "./home/home.reducer";
import authReducer from "./auth/auth.reducer";

export const reducer = combineReducers({
    home: homeReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof reducer>;