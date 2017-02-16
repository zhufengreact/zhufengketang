/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Button,Row,Col} from "antd"

export default class Course extends Component{
    handleClick(){
        this.props.history.push("/")
    }

    render(){
        return (
            <div className="course-empty">
                <div className="empty-hint text-center"><img src={require("../image/sorry.png")}/></div>
                <p className="empty-hint text-center">您还没有选课，快去选课吧！</p>
                <Button type='primary' size="large" className="empty-hint" onClick={this.handleClick.bind(this)}>去发现</Button>
            </div>
        )
    }
}