import { combineReducers, legacy_createStore as createStore } from "redux";
import { productsPageReducer} from "./products_reducer";
import {productItemReducer} from './product_item_reducer'

const reducers = combineReducers(
    {
        productsPage: productsPageReducer,
        productItem: productItemReducer
    }
)

const store = createStore(reducers)

export default store