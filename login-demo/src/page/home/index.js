import React, {
    Component
} from 'react';
import { Menu } from 'antd';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import {logout} from '../../store/actions/signUp'
import './index.css'

const { SubMenu } = Menu;
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            current: 'mail',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    render() { 
        // const { userInfo} = this.props.auth;
        console.log(this.props, 'userInfo');
        return ( 
            <div>  
               <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="mail" icon={<MailOutlined />}>
                        首页
                    </Menu.Item>
                    <SubMenu icon={<SettingOutlined />} title="目录列表">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">目录 1</Menu.Item>
                            <Menu.Item key="setting:2">目录 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="exit">
                        退出
                    </Menu.Item>
                </Menu>
            </div>
         );
    }
    async handleClick(e) {
        if(e.key == 'exit'){
            await this.props.logout();
            this.props.history.push('/login')
        }
        console.log(this.props, 'Store');
        this.setState({
          current: e.key,
        });
    }
}
 
const mapStateProps = (state)=>{
    return{
        // redux 里边的数据
        userInfo: state.auth
    }
}

// actions 方法
// 1.
/*
const mapDispathchToProps = (dispatch)=> {
    return {
        userSignUp: bindActionCreators(userSignUp.logout, dispatch)
    }
}*/

//2.
/*
export default connect(mapStateProps,{
    logout
})(SignUp);
*/
export default connect(mapStateProps,{
    logout
})(SignUp);;