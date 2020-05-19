import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            inputValue: 'heello', //input属性
            list: [1,2] //列表集合
        }
        this.handleInputClick = this.handleInputClick.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleBtnDel = this.handleBtnDel.bind(this)
    }
    
    render() {
        return (
            <Fragment>
                <label htmlFor="insertArea">输入内容</label>
                <input 
                    id="insertArea"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputClick}
                />
                <button 
                    onClick={this.handleBtnClick}
                >提交</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, i) => {
            return (
                <TodoItem
                key={i}
                index={i}
                content={item}
                handleItemDeleBtn={this.handleBtnDel}
                ></TodoItem>
            )
           
        })
    }

    handleInputClick(e) {
        //setState并不保证是同步的，故setState的更新函数中异步访问访问event变量为空
        //解决方案 event.persist()
        // 此方法会从池中移除合成事件，允许用户代码保留对事件的引用。
        e.persist(); 
        //react想要改变state的值，用setState
        const val = e.target.value
        this.setState(()=>({inputValue: val}))
    }
    handleBtnClick(e) {
        this.setState((prevState)=> {
            console.log(prevState);
            //prevState 数据修改之前的数据
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: ''
            }
        })
    }
    handleBtnDel(i) {
        // state不允许直接做任何修改，如果需要修改的话，可以拷贝及利用setState
        let list = [...this.state.list]
        list.splice(i,1)
        this.setState(()=>({list: list}))
    }
}
export default TodoList;