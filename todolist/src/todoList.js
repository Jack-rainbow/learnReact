import React, {Component, Fragment} from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: 'heello', //input属性
            list: [1,2] //列表集合
        }
    }
    
    render() {
        return (
            <Fragment>
                <input 
                    value={this.state.inputValue}
                    onChange={this.handleInputClick.bind(this)}
                />
                <button 
                    onClick={this.handleBtnClick.bind(this)}
                >提交</button>
                <ul>
                    {
                        this.state.list.map((item, i) => {
                            return <li 
                                key={i}
                                onClick={this.handleBtnDel.bind(this, i, item)}
                            >{ item }</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputClick(e) {
        //setState并不保证是同步的，故setState的更新函数中异步访问访问event变量为空
        //解决方案 event.persist()
        // 此方法会从池中移除合成事件，允许用户代码保留对事件的引用。
        e.persist(); 
        //react想要改变state的值，用setState
        this.setState({
            inputValue: e.target.value
        })
        console.log(this,'222');
    }
    handleBtnClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleBtnDel(i) {
        // state不允许直接做任何修改，如果需要修改的话，可以拷贝及利用setState
        let list = [...this.state.list]
        list.splice(i,1)
        this.setState({
            list: list
        })
    }
}
export default TodoList;