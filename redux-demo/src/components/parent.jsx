import React from 'react';
import Children from './children'

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tite: ''
        }
    }
    onhandleClick = (res) => {
        this.setState({
            tite: res
        })
    }
    render() {
        return (
            <div>
                父组件 {this.state.tite}
            <br />
                ---------------------------------------------
            <Children title='子标题' onChildrenEvent={this.onhandleClick} />
            </div>
        );
    }
}

export default Parent;
