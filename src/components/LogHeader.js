/**
 * Created by weimin on 17-2-20.
 */
import React,{Component} from "react"
import {Link} from "react-router"
import {Row,Icon,Layout,Col} from "antd"
const {Header} = Layout;

class LogHeader extends Component{
    render(){
        return (
                <Header className="page-header">
                    <Row>
                        <Link to={this.props.linkTo}><Col span={1}><Icon type="arrow-left"/></Col></Link>
                        <Col span={22}><div className="text-center">{this.props.text}</div></Col>
                    </Row>
                </Header>
        )
    }
}

export default LogHeader;