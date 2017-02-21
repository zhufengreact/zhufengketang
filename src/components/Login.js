/**
 * Created by weimin on 17-2-20.
 */
import React,{Component} from "react"
import {Link} from "react-router"
import LogHeader from "./LogHeader"
import {Form,Layout,Input,Button,Row,Col,Icon} from "antd"
const {Header,Content} = Layout
const FormItem = Form.Item;

class LogComp extends Component{
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <LogHeader linkTo="/setting" text="登录"></LogHeader>
                <Content className="password-content">
                    <Row className="text-center" style={{marginTop:"30px"}}>
                        <img src={require("../image/login.png")} alt=""/>
                    </Row>
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
                        <Link to="/register">前往注册</Link>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button" size="large">
                                登录
                            </Button>
                        </FormItem>
                        <Link to="/password" className="text-right">忘记密码？</Link>
                    </Form>
                </Content>
            </div>
        )
    }
}

const Login = Form.create()(LogComp);

export default Login;