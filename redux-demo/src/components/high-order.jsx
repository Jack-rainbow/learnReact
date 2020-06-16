import React from 'react';

const withFetch = (ComposeComponent)=> {
    return class extends React.Component{
        render(){
            return (<ComposeComponent {...this.props}/>)
        }
    }
}

class MyData extends React.Component{
    render() {
        return(
            <div>
                测试高阶组件： {this.props.data}
            </div>
        )
    }
}
const WithFetch = withFetch(MyData)

class HighOrder extends React.Component {

    render() {
        return (
            <div >
                <WithFetch data={'xxxxxxxxxx'}></WithFetch>
            </div>
        );
    }
}

export default HighOrder;
