import React from 'react';
import HighOrder from './high-order';
import NewChange from './new-change';
import NewChengpin from './new-chengpin'
import Errors from './error';
import ErrorBodys from './components/error-body';

class Children extends React.Component {
    
    handleClick() {
        this.props.onChildrenEvent('我是子组件的数据')
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                <br />
                子组件哦哦哦哦哦哦哦
                <br/>
                ------------------
                <br />
                这是来自父组件的值哦: {this.props.title}

                <br/>

                <HighOrder></HighOrder>


                <br />


                <NewChange></NewChange>

                <br />

                <ErrorBodys render={(err)=><p>{'组件错误'}</p>}>
                    <Errors></Errors>
                </ErrorBodys>
                <NewChengpin></NewChengpin>
            </div>
        );
    }
}

export default Children;
