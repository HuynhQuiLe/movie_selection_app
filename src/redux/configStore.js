import { combineReducers, createStore } from "redux";
import { datVeReducers } from "./reducer/datVeReducers";

const rootReducer = combineReducers({ datVeReducers });

const store = createStore(rootReducer);

export default store;
