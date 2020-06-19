import React,{axios} from 'react';
import {
    Form,
    Input,
    message, 
    Button, 
    Checkbox
} from 'antd';
import './index.css'
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as userSignUp from '../../store/actions/signUp'

class Registered extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {

        }
        
    }

    render() { 
        const layout = {
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        const onFinish = async (values) => {

            await this.props.userSignUp.userSignUp(values);
            message.success('成功');
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return (
            <div>
                <Form
                    className="login"
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                    <Form.Item
                        label="用户名"
                        name="userName"
                        rules = {
                            [{
                                required: true,
                                message: '请输入您的用户名'
                            }]
                        }
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="邮箱"
                        name="email"
                        rules = {
                            [{
                                required: true,
                                message: '请输入您的邮箱'
                            }]
                        }
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="确认密码"
                        name="confrimPassword"
                        rules={[{ required: true, message: '请输入您的密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                    </Form>
            </div>
        );
    }
}
 
const mapDispathchToProps = (dispatch)=> {
    return {
        userSignUp: bindActionCreators(userSignUp, dispatch)
    }
}

export default connect(null, mapDispathchToProps)(Registered);