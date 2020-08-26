import { combineReducers } from "redux";
import vendeurReducer from "./vendeureducer"
import productReducer from "./productreduces";
import userReducer from "./userReducer"
import authReducer from "./authentification"

const allReducers= combineReducers({
    product: productReducer,
    card :vendeurReducer,
    users:userReducer,
    auth:authReducer
});



export default allReducers;