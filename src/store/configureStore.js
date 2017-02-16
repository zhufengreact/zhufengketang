/**
 * Created by weimin on 17-2-14.
 */
import {createStore,applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers/index"
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);
export default store;
