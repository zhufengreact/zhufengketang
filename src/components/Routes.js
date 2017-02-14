/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Route,Router,IndexRoute,browserHistory} from "react-router"


import Home from "./Home"
import Course from "./Course"
import Setting from "./Setting"
import PageNav from "./PageNav"

class Routes extends Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={PageNav}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="course" component={Course}></Route>
                    <Route path="setting" component={Setting}></Route>
                </Route>
            </Router>
        )
    }
}

export default Routes;