import { combineReducers, legacy_createStore as createStore } from "redux";
import { productsPageReducer } from "./products_reducer";

const reducers = combineReducers(
    {
        productsPage: productsPageReducer
    }
)

const store = createStore(reducers)

export default store