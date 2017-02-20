/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Icon,Row,Col,Button} from "antd"
import {Link} from "react-router"


export default class Setting extends Component{
    render(){
        return (
            <div>
                <div className="setting-header text-center">
                    <Row><img src={require("../image/user-center-avatar.png")} alt="" style={{height:"20vh"}}/></Row>
                    <Row><Button size="large" className="text-primary" onClick={()=>{this.props.history.push("/login")}}>登录</Button></Row>
                </div>
                <div className="setting-content">
                    <Link to="/about">
                        <Row className="setting-list">
                            <Col span={1}><img src={require("../image/user.png")} alt="" className="icon-img"/></Col>
                            <Col span={22}>关于珠峰课堂</Col>
                            <Col span={1}><Icon type="arrow-right"/></Col>
                        </Row>
                    </Link>
                    <Link to="/password">
                        <Row className="setting-list">
                            <Col span={1}><img src={require("../image/password.png")} alt="" className="icon-img"/></Col>
                            <Col span={22}>忘记密码</Col>
                            <Col span={1}><Icon type="arrow-right"/></Col>
                        </Row>
                    </Link>
                    <Link to="/">
                        <Row className="setting-list">
                            <Col span={1}><img src={require("../image/password.png")} alt="" className="icon-img"/></Col>
                            <Col span={22}>登出</Col>
                            <Col span={1}><Icon type="arrow-right"/></Col>
                        </Row>
                    </Link>
                </div>
            </div>

        )
    }
}