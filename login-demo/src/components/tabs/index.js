import React from 'react';
import { Tabs } from 'antd';
import {
    Link
} from 'react-router-dom'
const { TabPane } = Tabs;


class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

   callback(key){
        console.log(this.props, 'key');
        // if (key == '2') {
        //     console.log(this.props, 'this.props.history');
        //     this.props.history.push('/registered')
        // }
    }
    render() { 
        return ( 
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                <TabPane tab={<Link to={'/'}>首页</Link>} key="1">
                    
                </TabPane>
                <TabPane tab={<Link to={'/registered'}>注册</Link>} key="2">
                </TabPane>
            </Tabs>
         );
    }
}
 
export default Tab;
//https://blog.csdn.net/qq_39100704/article/details/100725838