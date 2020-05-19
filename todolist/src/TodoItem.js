import React,{ Component} from 'react';

class TodoItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props;
        return (
            <div
            onClick={this.handleClick}
            >{content}</div>
        )
    }
    handleClick() {
        const { handleItemDeleBtn,index } = this.props;
        handleItemDeleBtn(index)
    }
}
export default TodoItem;