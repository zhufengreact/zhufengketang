/**
 * Created by weimin on 17-2-14.
 */
import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"

import * as reducers from "./HomeReducer"


const rootReducer = combineReducers({...reducers,routing:routerReducer});
export default rootReducer;