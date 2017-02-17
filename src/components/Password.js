/**
 * Created by weimin on 17-2-17.
 */
import React,{Component} from "react"
import {Link} from "react-router"
import {Layout,Form,Input,Button,Row,Col,Icon} from "antd"
const {Header,Content} = Layout;
const FormItem = Form.Item;

class FormGroup extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Header className="about-header">
                    <Row>
                        <Link to="/setting" style={{color:"#fff"}}><Col span={1}><Icon type="arrow-left"/></Col></Link>
                        <Col span={23}><div className="text-center">忘记密码</div></Col>
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
                        <FormItem label="验证码">
                            {getFieldDecorator('vcode', {
                                rules: [{ required: true, message: '请输入验证码' }],
                            })(
                                <Row>
                                    <Col span={20}><Input/></Col>
                                    <Col span={4}><Button type="primary" className="vcode-btn">发送验证码</Button></Col>
                                </Row>
                            )}
                        </FormItem>
                        <FormItem label="新密码">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入新密码!' }],
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </Content>
            </div>
        )
    }
}

const Password = Form.create()(FormGroup);

export default Password;
