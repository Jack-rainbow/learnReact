import React,{ useState,Component } from 'react';
import {
    Avatar
} from 'antd';

class NotFound extends Component {
    state = {  }
    render() { 
        console.log(useState);
        return ( 
            <div>
                <Avatar style={{verticalAlign: 'middle' }} size="large">
                    404
                </Avatar>
            </div>
         );
    }
}
 
export default NotFound;