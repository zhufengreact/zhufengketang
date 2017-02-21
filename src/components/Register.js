/**
 * Created by weimin on 17-2-20.
 */
import React,{Component} from "react"
import LogHeader from "./LogHeader"
import {Form,Layout,Input,Button,Row,Col,Icon} from "antd"
const {Header,Content} = Layout
const FormItem = Form.Item;

class RegComp extends Component{
    handleSubmit(e){
       e.preventDefault();
       this.props.form.validateFields((err,values)=>{
           console.log(err)
       })
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <LogHeader linkTo="/login" text="注册"/>
                <Content className="password-content">
                    <Row className="text-center" style={{marginTop:"30px"}}>
                        <img src={require("../image/register.png")} alt=""/>
                    </Row>
                    <Form style={{marginTop:"50px"}} onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem label="姓名">
                            {
                                getFieldDecorator("username",{
                                    rules:[{required:true,message:"必须输入用户名"}]
                                })(
                                    <Input/>
                                )
                            }
                        </FormItem>

                        <FormItem label="密码">
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input/>
                            )}
                        </FormItem>
                        
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
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                注册
                            </Button>
                        </FormItem>
                    </Form>
                </Content>
            </div>
        )
    }
}

const Register = Form.create()(RegComp);

export default Register;