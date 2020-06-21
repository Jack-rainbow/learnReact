import React,{axios} from 'react';
import {
    Form,
    Input,
    message, 
    Button, 
    PageHeader
} from 'antd';
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

       
        return (
            <div>
                <PageHeader
                    onBack={this.onLinkRegistry.bind(this)}
                    title="注册"
                    subTitle="去注册"
                />
                <Form
                    className="login"
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
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

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
               
            </div>
        );
    }
    onLinkRegistry() {
        this.props.history.push('/registered')
    }

    async onFinish(values) {
        let {code, msg} =  await this.props.userSignUp.userLogin(values);
        if(code == '200') {
            this.props.history.push('/home')
            message.success('登陆成功');
        } else {
            message.info(msg);
        }
       
    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };

}
 
const mapDispathchToProps = (dispatch)=> {
    return {
        userSignUp: bindActionCreators(userSignUp, dispatch)
    }
}

export default connect(null, mapDispathchToProps)(Registered);