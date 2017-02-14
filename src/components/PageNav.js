/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Link} from "react-router"
import {Row, Col} from "antd"

export default class PageNav extends Component{
    render(){
        return (
            <div>
                {this.props.children}
                <div className="bottom">
                    <Row type="flex" justify="space-around">
                        <Col span={8}>
                            <Link to="/">
                                <Row><img src={require("../image/menu-index.png")} alt=""/></Row>
                                首页
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Link to="/course" >
                                <Row>
                                    <img src={require("../image/my-course.png")} alt=""/>
                                </Row>
                                我的课程
                            </Link>
                        </Col>
                        <Col span={8}>
                            <Link to="/setting">
                                <Row>
                                    <img src={require("../image/user-center.png")} alt=""/>
                                </Row>
                                个人中心
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}