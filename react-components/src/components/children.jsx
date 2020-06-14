import React from 'react';
import PropTypes from 'prop-types';


const Topic = (props) => {
    return(
        <div>
            <Comment />
        </div>
    )
}

const Comment = (props, context) => {
    return(
        <div>
            {context.color}
        </div>
    )
}

export default class Children extends React.Component{
    state = {
    }

    componentDidMount() {
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        if(nextProps.num === this.props.num) {
            console.log(22);
            return false;
        }
        return true;
    }

    getChildContext() {
        return {
            color: 'red'
        }
    }

    render() {
        console.log(11, '2');
        return(
            <div>
                Children
                <br/>
                <Topic />
            </div>
        )
    }
}


// contextTypes 在子组件中用于说明context接收的数据类型
Comment.contextTypes = {
    color: PropTypes.string
}


//childContextTypes 用于说明所传递的数据类型，
Children.childContextTypes = {
    color: PropTypes.string
}
//getChildContext 该方法表示组件使用context传递数据，该方法返回的就是context需要传递的数据


//使用 context进行传参
// 1.定义子组件 需要的值，使用contextTypes 接收数据
// 2.使用 childContextTypes 传递数据
// 3.主组件使用getChildContext 传输数据
