import React from 'react';
import Children from './children'

/**
 * 
 * 计数列子
 *  
 * Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. 
 * To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
 * 
 * 上边报错提示
 * 
 * 定时器，事件监听，网络请求，需要在componentUnmount 里边解除下
 */

const myApi = {
    count: 0,
    subscribe(cb) {
       this.inter =  setInterval(() => {
            this.count += 1;
            cb(this.count);
        }, 1000);
    },
    unsubscribe() {
        clearInterval(this.inter);
        this.reset();
    },
    reset() {
        this.count = 0;
    }
}

export default class Parent extends React.Component{
    state = {
        count: 0
    }

    componentDidMount() {
        myApi.subscribe((res)=>{
            this.setState({
                count: res
            })
        });
    }

    componentWillUnmount() {
        myApi.unsubscribe();
    }

    onStop() {
        myApi.unsubscribe();
    }
    render() {
        return(
            <div>
                parent
                {this.state.count}
                <button onClick={this.onStop.bind(this)}>停止</button>
                <br/>
                <Children num={2}></Children>
            </div>
        )
    }
}