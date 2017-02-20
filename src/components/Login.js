/**
 * Created by weimin on 17-2-20.
 */
import React,{Component} from "react"
import {Link} from "react-router"
import {Form,Layout,Input,Button,Row,Col,Icon} from "antd"
const {Header,Content} = Layout
const FormItem = Form.Item;

class LogComp extends Component{
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Header className="about-header">
                    <Row>
                        <Link to="/setting" style={{color:"#fff"}}><Col span={1}><Icon type="arrow-left"/></Col></Link>
                        <Col span={23}><div className="text-center">登录</div></Col>
                    </Row>
                </Header>
                <Content className="password-content">
                    <Form style={{marginTop:"50px"}}>
                        <FormItem label="手机号">
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '必须输入手机号' }],
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem label="密码">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <Link>前往注册</Link>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                                登录
                            </Button>
                        </FormItem>
                        <Link className="text-right">忘记密码？</Link>
                    </Form>
                </Content>
            </div>
        )
    }
}

const Login = Form.create()(LogComp);

export default Login;