
import { legacy_createStore } from "redux";
import counterReducer from "./Reducers/Reducer";
const Store = legacy_createStore(counterReducer)
export default Store