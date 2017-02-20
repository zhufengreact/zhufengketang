/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Route,Router,IndexRoute,browserHistory} from "react-router"
import {Provider} from "react-redux"
import store from "../store/configureStore"

import HomeContainer from "../containers/HomeContainer"
import Course from "./Course"
import Setting from "./Setting"
import PageNav from "./PageNav"
import About from "./About"
import Password from "./Password"
import Login from "./Login"
class Routes extends Component{
    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory} >
                    <Route path="/about" component={About}></Route>
                    <Route path="/password" component={Password}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={PageNav}>
                        <IndexRoute component={HomeContainer}></IndexRoute>
                        <Route path="course" component={Course}></Route>
                        <Route path="setting" component={Setting}></Route>
                    </Route>
                </Router>   
            </Provider>
        )
    }
}

export default Routes;