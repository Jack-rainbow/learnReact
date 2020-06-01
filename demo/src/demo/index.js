import React,{ Component} from 'react';
import {
    Button,
    Pagination
} from 'antd';


class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <br />
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Pagination defaultCurrent={2} total={50} />
            </React.Fragment>
        )
    }
} 
export default Demo;