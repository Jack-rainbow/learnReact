import React from 'react';

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
            </div>
        );
    }
}

export default Children;
