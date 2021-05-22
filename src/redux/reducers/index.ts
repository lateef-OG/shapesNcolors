import { combineReducers } from "redux";
import homeReducer from "./home.reducer";

export const reducer = combineReducers({
    home: homeReducer,
})

export type RootState = ReturnType<typeof reducer>;