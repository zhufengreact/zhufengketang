/**
 * Created by weimin on 17-2-12.
 */
import React,{Component} from "react"
import {Link} from "react-router"
import {Row, Col} from "antd"

export default class PageNav extends Component{
    render(){
        const {pathname} = this.props.location;
        const imgs =[{path:"/",imgName:"menu-index",text:"首页"},{path:"/course",imgName:"my-course",text:"我的课程"},{path:"/setting",imgName:"user-center",text:"个人中心"}];
        return (
            <div>
                {this.props.children}
                <div className="bottom text-center">
                    <Row type="flex" justify="space-around">
                    {imgs.map((item)=>{
                        return (
                            <Col span={2} >
                                <Link to={item.path}>
                                {
                                 pathname==item.path&&(
                                    <div className="font-active">
                                    <Row>
                                        <img src={require("../image/"+item.imgName+".png")}/>
                                    </Row>
                                    {item.text}
                                    </div>)
                                 }
                                {
                                    pathname!=item.path&&(
                                        <div className="font-disable">
                                            <Row>
                                                <img src={require("../image/"+item.imgName+"-gray.png")}/>
                                            </Row>
                                            {item.text}
                                        </div>)
                                }
                                </Link>
                            </Col>
                        )
                    })}
                    </Row>
                </div>
            </div>
        )
    }
}